/* ============================================================================
   IntellAgent - bg.js
   Animated WebGL background: ordered (Bayer 4x4) dithering over a slow,
   domain-warped fBM noise field. Monochrome, art-directed to stay dark in the
   centre so the hero text reads. Zero dependencies.

   - Animates for everyone. Under prefers-reduced-motion it runs at half speed
     (gentler) rather than stopping, per the brand owner's request.
   - Pauses when the tab is hidden. Clamps device-pixel-ratio for performance.
   - Graceful fallback: if WebGL is unavailable the canvas stays empty and the
     solid black body shows through, so the page is unaffected.
   ========================================================================== */
(function () {
  'use strict';

  var canvas = document.getElementById('bg');
  if (!canvas) return;

  var gl = canvas.getContext('webgl', { antialias: true, alpha: false, powerPreference: 'low-power' });
  if (!gl) return; // no WebGL -> solid black background, page still fine

  var DPR_MAX = 2;
  var AMP = 0.62;            // overall effect strength
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timeScale = reduce ? 0.5 : 1.0;
  var mouse = [0.5, 0.5];
  var startT = performance.now();
  var raf = 0;

  var VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';

  var FRAG =
    'precision highp float;' +
    'uniform float u_time;uniform vec2 u_res;uniform vec2 u_mouse;uniform float u_amp;' +
    'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}' +
    'float vnoise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.0-2.0*f);' +
    'float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0));' +
    'return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}' +
    'mat2 rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}' +
    'float fbm(vec2 p){float v=0.0,a=0.5;for(int i=0;i<5;i++){v+=a*vnoise(p);p=rot(0.5)*p*2.0;a*=0.5;}return v;}' +
    'float vig(vec2 uv){return smoothstep(0.05,0.85,length(uv));}' +
    'float dither4x4(vec2 pos,float b){int x=int(mod(pos.x,4.0));int y=int(mod(pos.y,4.0));int idx=x+y*4;float l=0.0;' +
    'if(idx==0)l=0.0625;if(idx==1)l=0.5625;if(idx==2)l=0.1875;if(idx==3)l=0.6875;' +
    'if(idx==4)l=0.8125;if(idx==5)l=0.3125;if(idx==6)l=0.9375;if(idx==7)l=0.4375;' +
    'if(idx==8)l=0.25;if(idx==9)l=0.75;if(idx==10)l=0.125;if(idx==11)l=0.625;' +
    'if(idx==12)l=1.0;if(idx==13)l=0.5;if(idx==14)l=0.875;if(idx==15)l=0.375;' +
    'return b<l?0.0:1.0;}' +
    'void main(){vec2 uv=(gl_FragCoord.xy-0.5*u_res)/u_res.y;' +
    'vec2 m=(u_mouse-0.5)*0.3;' +
    'float t=u_time*0.05;' +
    'vec2 p=uv*1.8+m;' +
    'vec2 q=vec2(fbm(p+t),fbm(p+vec2(3.1,1.2)-t));' +
    'float f=fbm(p+2.5*q);' +
    'float bright=pow(clamp(f,0.0,1.0),1.5)*(0.45+0.55*u_amp);' +
    'bright*=mix(0.05,1.0,vig(uv));' +
    'float d=dither4x4(gl_FragCoord.xy,bright);' +
    'gl_FragColor=vec4(vec3(d*0.8),1.0);}';

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error('bg shader:', gl.getShaderInfoLog(s)); return null; }
    return s;
  }

  var vs = compile(gl.VERTEX_SHADER, VERT);
  var fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;
  var prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.error('bg link:', gl.getProgramInfoLog(prog)); return; }

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  var loc = {
    p: gl.getAttribLocation(prog, 'p'),
    time: gl.getUniformLocation(prog, 'u_time'),
    res: gl.getUniformLocation(prog, 'u_res'),
    mouse: gl.getUniformLocation(prog, 'u_mouse'),
    amp: gl.getUniformLocation(prog, 'u_amp')
  };

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', function (e) {
    mouse = [e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight];
  });

  // pause cleanly when the WebGL context is lost (e.g. GPU reset)
  canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); cancelAnimationFrame(raf); });
  canvas.addEventListener('webglcontextrestored', function () { resize(); raf = requestAnimationFrame(draw); });

  function draw(now) {
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(loc.p);
    gl.vertexAttribPointer(loc.p, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(loc.time, ((now - startT) / 1000.0) * timeScale);
    gl.uniform2f(loc.res, canvas.width, canvas.height);
    gl.uniform2f(loc.mouse, mouse[0], mouse[1]);
    gl.uniform1f(loc.amp, AMP);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!document.hidden) raf = requestAnimationFrame(draw);
  }
  raf = requestAnimationFrame(draw);
  document.addEventListener('visibilitychange', function () {
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(draw);
  });
})();

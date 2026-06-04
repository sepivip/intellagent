/* ============================================================================
   IntellAgent - main.js
   Progressive-enhancement form handling for Web3Forms.
   Submits via fetch() (no redirect), so the single screen holds. Implements
   client validation, loading / success / error states, and a honeypot guard.
   ========================================================================== */
(function () {
  'use strict';

  var ACCESS_KEY_PLACEHOLDER = 'YOUR_WEB3FORMS_ACCESS_KEY';
  var ENDPOINT = 'https://api.web3forms.com/submit';

  var form = document.getElementById('form');
  if (!form) return;

  var submitBtn = document.getElementById('submit');
  var label = submitBtn.querySelector('.cta__label');
  var formError = document.getElementById('form-error');
  var successEl = document.getElementById('success');
  var reassure = document.getElementById('reassure');
  var labelText = label.textContent;

  var fields = {
    name: {
      el: form.elements.name,
      errorEl: document.getElementById('name-error'),
      validate: function (v) { return v.trim() ? '' : 'Please enter your name.'; }
    },
    email: {
      el: form.elements.email,
      errorEl: document.getElementById('email-error'),
      validate: function (v) {
        if (!v.trim()) return 'Please enter your work email.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
          ? '' : 'Enter a valid email, like you@company.com.';
      }
    }
  };

  function setFieldError(f, msg) {
    f.errorEl.textContent = msg;
    f.el.setAttribute('aria-invalid', 'true');
  }
  function clearFieldError(f) {
    if (f.errorEl.textContent) f.errorEl.textContent = '';
    f.el.removeAttribute('aria-invalid');
  }
  function hideFormError() {
    formError.hidden = true;
    formError.textContent = '';
  }
  function showFormError(msg) {
    formError.textContent = msg;
    formError.hidden = false;
  }

  // Validate on submit; clear a field's error as soon as the user edits it.
  Object.keys(fields).forEach(function (key) {
    fields[key].el.addEventListener('input', function () {
      clearFieldError(fields[key]);
      hideFormError();
    });
  });

  // interest pills are a required radio group ("Not sure" is a valid pick)
  var interestError = document.getElementById('interest-error');
  function interestValue() {
    return form.elements.interest ? form.elements.interest.value : '';
  }
  Array.prototype.forEach.call(
    document.querySelectorAll('input[name="interest"]'),
    function (r) {
      r.addEventListener('change', function () {
        if (interestError) interestError.textContent = '';
        hideFormError();
      });
    }
  );

  function setLoading(on) {
    if (on) {
      submitBtn.style.minWidth = submitBtn.offsetWidth + 'px'; // freeze width - no jump
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      label.textContent = 'Sending…';
    } else {
      submitBtn.disabled = false;
      submitBtn.removeAttribute('aria-busy');
      label.textContent = labelText;
      submitBtn.style.minWidth = '';
    }
  }

  function showSuccess() {
    setLoading(false);
    if (typeof successEl.showModal === 'function') successEl.showModal();
    else successEl.setAttribute('open', ''); // fallback for very old browsers
  }

  // OK / Esc / backdrop -> close the modal and return to a fresh form
  var okBtn = document.getElementById('success-ok');
  if (okBtn) okBtn.addEventListener('click', function () {
    if (typeof successEl.close === 'function') successEl.close();
    else successEl.removeAttribute('open');
  });
  successEl.addEventListener('close', function () {
    form.reset();
    Object.keys(fields).forEach(function (k) { clearFieldError(fields[k]); });
    if (interestError) interestError.textContent = '';
    hideFormError();
    setLoading(false);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideFormError();

    // 1. client validation
    var firstInvalid = null;
    Object.keys(fields).forEach(function (key) {
      var f = fields[key];
      var msg = f.validate(f.el.value);
      if (msg) {
        setFieldError(f, msg);
        if (!firstInvalid) firstInvalid = f.el;
      } else {
        clearFieldError(f);
      }
    });

    // interest pills are required ("Not sure" is a valid pick)
    if (!interestValue()) {
      if (interestError) interestError.textContent = 'Pick what you want to explore.';
      if (!firstInvalid) firstInvalid = document.querySelector('input[name="interest"]');
    }

    if (firstInvalid) { firstInvalid.focus(); return; }

    // 2. honeypot - a bot filled the hidden field; fake success, send nothing
    if (form.elements.botcheck && form.elements.botcheck.checked) {
      showSuccess();
      return;
    }

    // 3. config guard
    var accessKey = form.elements.access_key && form.elements.access_key.value;
    if (!accessKey || accessKey === ACCESS_KEY_PLACEHOLDER) {
      console.warn('[IntellAgent] Web3Forms access_key not set. Replace "' +
        ACCESS_KEY_PLACEHOLDER + '" in index.html with your key from https://web3forms.com.');
      showFormError('This form isn’t connected yet. Please try again shortly.');
      return;
    }

    // 4. submit
    setLoading(true);
    var payload = {};
    new FormData(form).forEach(function (value, key) { payload[key] = value; });

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; })
          .then(function (data) { return { ok: res.ok, data: data }; });
      })
      .then(function (r) {
        if (r.ok && r.data && r.data.success) {
          showSuccess();
        } else {
          setLoading(false);
          showFormError((r.data && r.data.message) ||
            'Something went wrong - please try again in a moment.');
        }
      })
      .catch(function () {
        setLoading(false);
        showFormError('Network error - check your connection and try again.');
      });
  });
})();

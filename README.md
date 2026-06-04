# IntellAgent — intellagent.us

A single-screen landing page for **IntellAgent**, an AI-adoption advisory
(automations, workflows, agents, training — advisory-led). Brand-first, strict
monochrome, built as a static site for **GitHub Pages**.

The visual design system is documented in **[DESIGN.md](DESIGN.md)** in the
[google-labs-code/design.md](https://github.com/google-labs-code/design.md)
format (machine-readable tokens + rationale). It was derived from the design
language of the Microsoft Surface RTX Spark Dev Box page — monochrome, uppercase
monospace display (IBM Plex Mono), light humanist sans (IBM Plex Sans), square
corners, generous negative space.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page (semantic, accessible). |
| `styles.css` | All styles. CSS variables mirror the tokens in `DESIGN.md`. |
| `main.js` | Form submission (Web3Forms via `fetch()`), validation, loading/success/error states. |
| `DESIGN.md` | The design system — source of truth for colors, type, spacing, components. |
| `favicon.svg` · `robots.txt` · `.nojekyll` · `CNAME` | Static-site plumbing. |

## Before it goes live — set the Web3Forms key

The intake form posts to [Web3Forms](https://web3forms.com) (no backend needed).

1. Go to **web3forms.com**, enter your private recipient email (the inbox where
   leads should land), and copy the **Access Key** it emails you.
2. In `index.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with that key.
3. In your Web3Forms dashboard, **restrict the key to `intellagent.us`** (domain
   allowlist) so the public key can't be abused elsewhere.

> The repo is **public**, so the access key is visible in the HTML — that's by
> design. It only allows submitting *this* form to your pre-set address; the
> recipient email lives only in the Web3Forms dashboard (set when you created the
> key) and **never appears in the repo or on the page**. Spam is mitigated by the honeypot
> field and the domain allowlist. hCaptcha can be added later for more protection.

## Deploy to GitHub Pages

1. Create a **public** repo (e.g. `intellagent`) and push these files to `main`.
2. **Settings → Pages →** Source: *Deploy from a branch*, Branch: `main` / `/ (root)`.
3. For the custom domain (`intellagent.us`) — do this once your DNS is ready:
   - At your DNS provider, point the apex domain to GitHub Pages with these
     **A records**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153` (and/or an `AAAA`/`ALIAS` per GitHub's current docs).
   - In **Settings → Pages**, set the custom domain to `intellagent.us` (GitHub
     creates the `CNAME` file for you) and enable **Enforce HTTPS**.
   - Until then, the site serves at the `*.github.io` URL.

## Local preview

It's plain static files — open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

(The form only sends once the Web3Forms key is set; validation and states work
locally regardless.)

## Changing the design

Edit `DESIGN.md` (the tokens), then mirror the change in the CSS variables at the
top of `styles.css`. The official CLI can validate and export tokens:

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md export --format css-tailwind DESIGN.md
```

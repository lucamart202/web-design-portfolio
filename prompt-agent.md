# AI Coding Agent Prompt — Freelance Web Designer Portfolio

## Your Role

You are a senior front-end developer building a complete, production-ready freelance portfolio website from scratch. You will use **plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no npm**. The output must be a set of static files that can be opened in a browser directly or deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

You have two companion reference documents:
- `site-structure.md` — describes every page, section, and piece of content
- `design-system.md` — defines every color, font, spacing value, component style, and animation

**Read both documents fully before writing a single line of code.** Every decision about layout, color, typography, spacing, and interaction must come from those documents. Do not improvise design choices.

---

## Project Overview

**Client:** A freelance web designer targeting small local businesses in the USA (focus: construction & home services)  
**Brand:** Personal name only (no studio name) — use placeholder `[Your Name]` throughout  
**Goal:** A minimal-dramatic portfolio website that communicates premium quality, builds trust, and converts local business owners into leads  
**Language:** English only  
**No CMS, no backend, no database** — pure static HTML/CSS/JS

---

## File Structure to Generate

```
/
├── index.html              ← Home page
├── services.html           ← Services page
├── work.html               ← Portfolio/Work page
├── testimonials.html       ← Testimonials page
├── pricing.html            ← Pricing page
├── contact.html            ← Contact page
├── css/
│   └── styles.css          ← Single compiled stylesheet (all styles)
├── js/
│   └── main.js             ← Single JavaScript file (all interactions)
└── assets/
    └── images/             ← Empty directory (placeholders used in HTML)
```

**Rules:**
- One CSS file. No splitting into multiple CSS files.
- One JS file. No splitting.
- No external CSS frameworks (no Bootstrap, no Tailwind, no Normalize beyond a minimal CSS reset).
- No JavaScript libraries (no jQuery, no GSAP, no Swiper). Use native browser APIs only.
- External resource allowed: Google Fonts (loaded via `<link>` in `<head>`).

---

## CSS Architecture

### 1. Start with a CSS Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html { scroll-behavior: smooth; }
img, video { max-width: 100%; display: block; }
button, input, textarea, select { font: inherit; }
```

### 2. Define All CSS Custom Properties on `:root`

Copy every token from `design-system.md` Section 1 (colors), Section 2 (typography), and Section 3 (spacing) into `:root {}` at the top of `styles.css`. Reference these tokens throughout — never hardcode hex values or pixel sizes in component styles.

```css
:root {
  /* Colors */
  --color-bg: #FFFFFF;
  --color-bg-soft: #F5F5F3;
  /* ... all tokens ... */

  /* Typography */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  /* ... all scale tokens ... */

  /* Spacing */
  --space-1: 0.25rem;
  /* ... all spacing tokens ... */
}
```

### 3. CSS Organization Order

Structure `styles.css` in this exact order:
1. Reset
2. `:root` custom properties
3. Base styles (body, `a`, `p`, `h1`–`h6`, `ul`, `img`)
4. Utility classes (`.container`, `.section-label`, `.btn-primary`, `.btn-inverted`, `.link-arrow`, `.reveal`, `.reveal-child`)
5. Layout components (`.navbar`, `.footer`)
6. Page sections (in order of pages: home → services → work → testimonials → pricing → contact)
7. Responsive overrides (`@media` queries, mobile-first with `min-width`)
8. Accessibility (`focus-visible`, `prefers-reduced-motion`)

---

## HTML Structure Requirements

### Every HTML File Must Include

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] — [Your Name] | Web Designer</title>
  <meta name="description" content="[Page-specific description, max 155 characters]">
  
  <!-- Preconnect for fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Google Fonts: Cormorant Garamond + Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- NAVBAR -->
  <header class="navbar" id="navbar">
    <!-- see Navbar spec below -->
  </header>

  <!-- MAIN CONTENT -->
  <main>
    <!-- page sections -->
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <!-- see Footer spec below -->
  </footer>

  <script src="js/main.js" defer></script>
</body>
</html>
```

### Navbar HTML (Identical on All Pages)

```html
<header class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="index.html" class="nav-wordmark">[Your Name]</a>
    
    <nav class="nav-links" aria-label="Main navigation">
      <a href="work.html" class="nav-link">Work</a>
      <a href="services.html" class="nav-link">Services</a>
      <a href="testimonials.html" class="nav-link">Testimonials</a>
      <a href="pricing.html" class="nav-link">Pricing</a>
      <a href="contact.html" class="nav-link">Contact</a>
      <a href="contact.html" class="btn-primary nav-cta">Let's Talk</a>
    </nav>
    
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- Mobile Overlay Menu -->
<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <button class="mobile-menu__close" id="mobileClose" aria-label="Close menu">✕</button>
  <nav class="mobile-menu__nav">
    <a href="work.html">Work</a>
    <a href="services.html">Services</a>
    <a href="testimonials.html">Testimonials</a>
    <a href="pricing.html">Pricing</a>
    <a href="contact.html">Contact</a>
    <a href="contact.html" class="btn-inverted">Let's Talk</a>
  </nav>
</div>
```

**Active state:** Add `aria-current="page"` to the nav link that matches the current page. Style it: `color: var(--color-text-primary); font-weight: 600`.

### Footer HTML (Identical on All Pages)

```html
<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <a href="index.html" class="nav-wordmark">[Your Name]</a>
      <p class="footer__tagline">Websites that work as hard as you do.</p>
    </div>
    <div class="footer__links">
      <a href="work.html">Work</a>
      <a href="services.html">Services</a>
      <a href="testimonials.html">Testimonials</a>
      <a href="pricing.html">Pricing</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer__contact">
      <a href="mailto:hello@yourname.com">hello@yourname.com</a>
      <a href="https://wa.me/1XXXXXXXXXX" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </div>
  <div class="footer__bottom">
    <p>© <span id="currentYear"></span> [Your Name]. All rights reserved.</p>
  </div>
</footer>
```

In `main.js`, set the year: `document.getElementById('currentYear').textContent = new Date().getFullYear();`

---

## Page-by-Page Build Instructions

### Page 1 — `index.html` (Home)

#### Hero Section
This is the most critical section. The typography IS the design.

```html
<section class="hero" aria-label="Introduction">
  <div class="container hero__content">
    <div class="hero__headline">
      <span class="hero__line hero__line--serif">We build</span>
      <span class="hero__line hero__line--bold">websites</span>
      <span class="hero__line hero__line--serif">that bring you</span>
      <span class="hero__line hero__line--accent">more customers.</span>
    </div>
    <p class="hero__sub">
      Clean, professional websites for local businesses in the USA. No fluff. Just results.
    </p>
    <div class="hero__cta">
      <a href="work.html" class="btn-primary">See My Work</a>
      <a href="contact.html" class="link-arrow">Or get in touch →</a>
    </div>
  </div>
  <div class="hero__scroll-indicator" aria-hidden="true">
    <span>scroll</span>
    <div class="hero__scroll-line"></div>
  </div>
</section>
```

**Hero CSS requirements:**
- `min-height: 100vh`, flexbox centered
- `.hero__line--serif`: `font-family: var(--font-serif)`, italic, weight 300, size `var(--text-hero-serif)`, color `var(--color-text-secondary)`
- `.hero__line--bold`: `font-family: var(--font-sans)`, weight 900, size `var(--text-hero-sans)`, color `var(--color-text-primary)`, `letter-spacing: var(--tracking-tight)`, `line-height: 0.9`
- `.hero__line--accent`: `font-family: var(--font-sans)`, weight 700, size `var(--text-hero-accent)`, color `var(--color-accent)`
- Each `.hero__line` is a `display: block` element — they stack vertically
- The headline block has `animation: fadeUp 0.8s ease 0.1s both`
- Sub-text and CTA animate in with `animation-delay: 0.3s` and `0.5s` respectively

#### Trust Bar Section
```html
<section class="trust-bar" aria-label="Quick facts">
  <div class="container trust-bar__inner">
    <div class="trust-bar__item">5+ Projects Delivered</div>
    <div class="trust-bar__divider" aria-hidden="true"></div>
    <div class="trust-bar__item">100% Client Satisfaction</div>
    <div class="trust-bar__divider" aria-hidden="true"></div>
    <div class="trust-bar__item">Fast Turnaround — 2–4 Weeks</div>
    <div class="trust-bar__divider" aria-hidden="true"></div>
    <div class="trust-bar__item">USA-Based Clients Only</div>
  </div>
</section>
```

CSS: Full-width, background `var(--color-bg-muted)`, `padding-block: var(--space-8)`. Items: `font-size: var(--text-label)`, `text-transform: uppercase`, `letter-spacing: var(--tracking-wider)`, `color: var(--color-text-muted)`. Dividers: `width: 1px`, `height: 1.5rem`, `background: var(--color-border)`.

#### Services Preview Section
Follow the structure from `site-structure.md` Section 1.3. Add `class="reveal"` to the section container and `class="reveal reveal-child"` to each service item.

Service items are separated by `<hr class="section-rule">` (CSS: `border: none; border-top: 1px solid var(--color-border); margin: 0`). Each item has: the decorative number, service name, and 1-sentence description.

#### Featured Work Section
```html
<section class="section featured-work">
  <div class="container">
    <h2 class="section-headline reveal">Selected Work</h2>
    <div class="project-grid reveal">
      <!-- 2 project cards -->
      <article class="project-card">
        <div class="project-card__image" role="img" aria-label="Project 1 preview">
          <div class="project-card__placeholder">
            <span>01</span>
          </div>
          <div class="project-card__overlay">
            <span class="link-arrow" style="color:white">View Project →</span>
          </div>
        </div>
        <div class="project-card__info">
          <span class="project-card__tag">Roofing Company · USA</span>
          <h3 class="project-card__name">Project Name</h3>
        </div>
      </article>
      <!-- repeat for card 2 -->
    </div>
    <div class="section-cta reveal">
      <a href="work.html" class="link-arrow">See All Projects →</a>
    </div>
  </div>
</section>
```

#### Why Me (Dark Section)
```html
<section class="section section-dark why-me">
  <div class="container">
    <div class="why-me__grid">
      <div class="why-me__item reveal reveal-child">
        <span class="why-me__number">01</span>
        <h3>More Customers</h3>
        <p>Your website becomes your best salesperson, working 24/7 to bring in new leads.</p>
      </div>
      <div class="why-me__item reveal reveal-child">
        <span class="why-me__number">02</span>
        <h3>Zero Headaches</h3>
        <p>I handle design, development, and launch. You focus on running your business.</p>
      </div>
      <div class="why-me__item reveal reveal-child">
        <span class="why-me__number">03</span>
        <h3>Built to Last</h3>
        <p>Fast, mobile-ready, and easy to update. No tech knowledge needed on your end.</p>
      </div>
    </div>
  </div>
</section>
```

CSS: `background: var(--color-dark-section)`, `color: white`. Numbers: `var(--text-number)` size, color `rgba(255,255,255,0.07)`, display as large decorative background text. Grid: 3 columns on desktop, 1 on mobile.

#### Testimonials Teaser
```html
<section class="section testimonials-teaser">
  <div class="container testimonials-teaser__inner reveal">
    <span class="section-label">What Clients Say</span>
    <blockquote class="testimonials-teaser__quote">
      <p>"[Best testimonial quote here — 1–3 sentences]"</p>
      <footer>
        <cite>CLIENT NAME — Business Name, City, State</cite>
      </footer>
    </blockquote>
    <a href="testimonials.html" class="link-arrow">Read all testimonials →</a>
  </div>
</section>
```

CSS: Quote `font-family: var(--font-serif)`, italic, `font-size: var(--text-quote)`, centered, `max-width: 700px`, `margin-inline: auto`.

#### CTA Banner
```html
<section class="cta-banner" aria-label="Call to action">
  <div class="container reveal">
    <h2>Ready to get more customers online?</h2>
    <p>Let's build something great together. No commitment required.</p>
    <a href="contact.html" class="btn-inverted">Start a Project</a>
  </div>
</section>
```

---

### Page 2 — `services.html`

Follow `site-structure.md` Section 2 precisely.

**Key implementation notes:**
- Alternating rows: use CSS `grid-template-columns: 1fr 1fr` with `nth-child(even)` reversing column order via `grid-column` or `order` property.
- Process steps: connected by a thin horizontal line on desktop. Use a flex container with pseudo-elements `::before`/`::after` on each step, or a single background line behind the items.
- Each process step circle: `width: 2.5rem`, `height: 2.5rem`, `border: 2px solid var(--color-accent)`, `border-radius: 50%`, centered number inside.
- End with the CTA banner component (identical to Home).

---

### Page 3 — `work.html`

Follow `site-structure.md` Section 3 precisely.

**Key implementation notes:**
- Filter buttons: plain `<button>` elements with class `.filter-btn`. Active state: `color: var(--color-accent); border-bottom: 2px solid var(--color-accent)`.
- Filter JS behavior: clicking a filter hides/shows cards using `display: none`/`display: block` with `data-category` attributes on each card. Add a `0.3s` opacity transition.
- Project cards use CSS Grid: `grid-template-columns: repeat(2, 1fr)` on desktop, `1fr` on mobile.
- Placeholder card: `background: var(--color-dark-section)`, large centered project number in `rgba(255,255,255,0.15)`, project name in white below.
- "Portfolio coming soon" note: visually subtle, italic serif, centered, muted color.

---

### Page 4 — `testimonials.html`

Follow `site-structure.md` Section 4 precisely.

**Key implementation notes:**
- Grid: `grid-template-columns: repeat(2, 1fr)`, gap `var(--grid-gap)`, `1fr` on mobile.
- Decorative quote mark: Unicode `"` (left double quotation mark), not straight quotes.
- Stars: `<span aria-label="5 out of 5 stars" role="img">★★★★★</span>`, color `var(--color-accent)`.
- Cards: `border: 1px solid var(--color-border)`, `padding: var(--space-10) var(--space-8)`.
- Each card has `class="reveal reveal-child"` for staggered entrance.

---

### Page 5 — `pricing.html`

Follow `site-structure.md` Section 5 precisely.

**Key implementation notes:**
- NO dollar amounts anywhere on this page. No pricing tiers.
- Feature columns: 3-column flex/grid. Each column: number `01`/`02`/`03` decorative, bold heading, 2-sentence description.
- FAQ accordion: implement with vanilla JS. Toggle `open` class on `.faq-item` when question button clicked. Close all others when one opens (accordion behavior). Rotate the toggle indicator `+`/`−` or a chevron SVG.
  
```javascript
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
```

---

### Page 6 — `contact.html`

Follow `site-structure.md` Section 6 precisely.

**Key implementation notes:**

**Form HTML:**
```html
<form class="contact-form" id="contactForm" novalidate>
  <!-- Honeypot anti-spam field — hidden from users -->
  <div style="display:none" aria-hidden="true">
    <input type="text" name="_honey" tabindex="-1" autocomplete="off">
  </div>
  
  <div class="form-field">
    <label class="form-label" for="name">Name *</label>
    <input class="form-input" type="text" id="name" name="name" required autocomplete="name">
  </div>
  <div class="form-field">
    <label class="form-label" for="business">Business Name *</label>
    <input class="form-input" type="text" id="business" name="business" required>
  </div>
  <div class="form-field">
    <label class="form-label" for="email">Email *</label>
    <input class="form-input" type="email" id="email" name="email" required autocomplete="email">
  </div>
  <div class="form-field">
    <label class="form-label" for="phone">Phone (optional)</label>
    <input class="form-input" type="tel" id="phone" name="phone" autocomplete="tel">
  </div>
  <div class="form-field">
    <label class="form-label" for="message">What do you need? *</label>
    <textarea class="form-textarea" id="message" name="message" required
      placeholder="Tell me about your business and your goals…"></textarea>
  </div>
  <button type="submit" class="btn-primary" style="width:100%">Send Message</button>
</form>

<!-- Success state (hidden by default) -->
<div class="form-success" id="formSuccess" hidden>
  <h3>Thanks! I'll be in touch within 24 hours.</h3>
  <p>In the meantime, feel free to reach out directly.</p>
</div>
```

**Form JS behavior:**
```javascript
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Check honeypot
  if (form._honey.value) return;
  // Basic validation feedback (add .error class to invalid fields)
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    } else {
      field.classList.remove('error');
    }
  });
  if (!valid) return;
  // Show success (in production, replace with actual form submission)
  form.hidden = true;
  success.hidden = false;
});
```

CSS for error state:
```css
.form-input.error,
.form-textarea.error {
  border-color: #C0392B;
}
```

**Note to developer:** The form does not send emails in this static version. For production, integrate with Formspree (`action="https://formspree.io/f/XXXXXXXX"` and remove `novalidate`/JS submission), Netlify Forms (`netlify` attribute), or similar.

---

## JavaScript File — `main.js`

Structure `main.js` in this order:

```javascript
// 1. Navbar scroll behavior
// 2. Mobile menu toggle
// 3. Scroll-triggered reveal animations (IntersectionObserver)
// 4. FAQ accordion
// 5. Portfolio filter (work.html only — check if element exists before running)
// 6. Contact form validation and success state
// 7. Footer current year
// 8. Active nav link highlighting
```

**All JS must be wrapped in `DOMContentLoaded` or deferred via `defer` attribute (already set in HTML).**

**Guard against missing elements:**
```javascript
// Always check before using
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  // mobile menu code
}
```

---

## Responsive Behavior — Critical Rules

### Mobile (<768px)
- Navbar: hide `.nav-links`, show `.hamburger`
- Hero: reduce headline sizes via `clamp()` (already built into the type scale — no overrides needed)
- All multi-column grids become `grid-template-columns: 1fr`
- Section padding reduces to `var(--space-20)`
- Container padding: `var(--space-6)` (1.5rem)
- CTA banner: stack headline + sub-text + button vertically with generous spacing
- Contact page: stack two columns vertically (contact info on top, form below)

### Tablet (768px–1024px)
- Navbar: show `.nav-links` but tighter spacing
- 3-column grids may go to 2 columns
- Hero type scale adjusts via `clamp()` — no extra CSS needed

### Wide (>1440px)
- Container maxes out at `1280px` — no content stretches beyond this
- Hero headline may reach maximum `clamp()` values — ensure they still look proportional at large sizes

---

## Quality Checklist

Before delivering the code, verify every item:

**Design Fidelity**
- [ ] Hero uses Cormorant Garamond italic + Inter 900 mix exactly as specified
- [ ] Navy accent (`#0A2463`) is used only in designated places (not scattered)
- [ ] No hardcoded hex values in CSS — all use CSS custom properties
- [ ] All spacing uses `--space-*` tokens
- [ ] No `border-radius` greater than `2px` anywhere
- [ ] Dark section and CTA banner appear on correct pages

**Typography**
- [ ] Section labels are uppercase, letter-spaced, navy, `0.75rem`
- [ ] Decorative numbers are present and styled as light gray background elements
- [ ] Max paragraph width is `65ch` on all body text blocks
- [ ] One `<h1>` per page only

**Interactions**
- [ ] Navbar transitions to white on scroll (tested at 80px threshold)
- [ ] Mobile hamburger opens full-screen overlay
- [ ] All `.reveal` elements animate in on scroll (not on page load)
- [ ] Hero content animates on page load via CSS `@keyframes fadeUp`
- [ ] FAQ accordion works (open/close, one at a time)
- [ ] Project filter works on `work.html`
- [ ] Contact form shows success state, catches honeypot, validates required fields

**Accessibility**
- [ ] All images have `alt` attributes
- [ ] Focus rings visible on all interactive elements
- [ ] `prefers-reduced-motion` disables all animations
- [ ] `aria-current="page"` on active nav link
- [ ] Mobile menu has `aria-expanded` on hamburger button
- [ ] Form labels associated with inputs via `for`/`id`

**Performance**
- [ ] All below-fold images use `loading="lazy"`
- [ ] Google Fonts loaded with `display=swap`
- [ ] No unused CSS or JS
- [ ] Single CSS file, single JS file

**Cross-Page Consistency**
- [ ] Navbar HTML is identical on all 6 pages
- [ ] Footer HTML is identical on all 6 pages
- [ ] CTA banner HTML is identical on applicable pages
- [ ] Active nav link correctly marked on each page

---

## Placeholder Content Guidelines

Use these realistic placeholder values throughout:

- **Name:** `Luca Martino` (replace with real name)
- **Email:** `hello@alexmorgan.design`
- **WhatsApp:** `+1 (555) 000-0000`
- **Project names:** `"Summit Roofing Co."`, `"Precision Plumbing LLC"`
- **Client location tags:** `"Roofing Company · Texas, USA"`, `"Plumbing · Florida, USA"`
- **Testimonials:** Write 4–6 realistic testimonials from fictional construction/home services clients. Include business name, city, state.
- **FAQ answers:** Write complete, realistic answers — not lorem ipsum.
- **Service descriptions:** Write real copy targeting construction/home services businesses. Mention their specific pain points (e.g., "Most roofing companies lose leads because their website doesn't work on mobile...").

**No lorem ipsum anywhere in the final output.**

---

## Deliverable

Produce all 6 HTML files, `css/styles.css`, and `js/main.js` as complete, production-ready files. The site must work correctly when opened locally in a browser with no server (all paths must be relative). Every section described in `site-structure.md` must be present. Every style decision must trace back to `design-system.md`.

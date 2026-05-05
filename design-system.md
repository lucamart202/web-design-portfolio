# Design System — Freelance Web Designer Portfolio
**Style:** Minimal-dramatic hybrid — Apple-level whitespace meets agency boldness  
**Aesthetic:** Premium, editorial, trustworthy. Strong typographic identity.  
**Mood keywords:** Clean · Confident · Elegant · Modern · Trustworthy

---

## 1. Color Palette

### Primary Colors

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-bg` | Pure White | `#FFFFFF` | Main page background |
| `--color-bg-soft` | Off-White | `#F5F5F3` | Alternate section backgrounds, footer |
| `--color-bg-muted` | Light Gray | `#F0F0EE` | Trust bar, section dividers, card backgrounds |
| `--color-text-primary` | Near-Black | `#0A0A0A` | Body text, headings, navigation |
| `--color-text-secondary` | Charcoal | `#3A3A3A` | Subheadlines, descriptions |
| `--color-text-muted` | Medium Gray | `#8A8A8A` | Tags, labels, captions, placeholder text |

### Accent Colors

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-accent` | Midnight Navy | `#0A2463` | Accent headlines, CTA buttons, links, decorative elements |
| `--color-accent-light` | Navy Tint | `#E8EDF7` | Hover states on light backgrounds, subtle highlights |
| `--color-accent-hover` | Deep Navy | `#071A47` | Button hover state (darkened accent) |

### Semantic / Surface Colors

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-dark-section` | Ink Black | `#0A0A0A` | Dark contrast sections (Why Me, footer option) |
| `--color-border` | Border Gray | `#E0E0E0` | Card borders, dividers, horizontal rules |
| `--color-shadow` | Shadow | `rgba(0,0,0,0.06)` | Card box-shadows |
| `--color-overlay` | Dark Overlay | `rgba(10,10,10,0.85)` | Mobile nav overlay background |

### Color Rules
- **Never use more than 2 colors in any single section.** Navy accent must feel intentional and rare.
- **Navy is exclusively for:** accent words in headlines, primary CTA buttons, decorative quote marks, hover states, and the pre-footer CTA banner.
- **Avoid gradients** across the entire site. Flat color only.
- **White sections** dominate (>70% of the site). Dark sections are used sparingly for maximum contrast impact.

---

## 2. Typography

### Font Families

**Serif (italic/editorial):** `Cormorant Garamond`  
**Sans-serif (bold/structural):** `Inter`

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;900&display=swap');

--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### The Typography Signature

The defining visual pattern of this site is the **serif-italic + sans-bold pairing** within the same headline block. This pairing must appear on:
- Every page hero
- The Home page hero (most prominent instance)
- Section headlines where visual emphasis is needed

**Pattern:** Serif italic line (elegant, flowing) immediately followed by sans-serif bold line (powerful, grounded).

```
"We build"          ← Cormorant Garamond, italic, weight 300, large
"websites"          ← Inter, weight 900, extra-large, near-black
"that bring you"    ← Cormorant Garamond, italic, weight 300, medium
"more customers."   ← Inter, weight 700, large, navy accent
```

### Type Scale

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `--text-hero-serif` | `clamp(3rem, 6vw, 5.5rem)` | 1.1 | 300 italic | Serif | Hero serif lines |
| `--text-hero-sans` | `clamp(4rem, 9vw, 9rem)` | 0.95 | 900 | Sans | Hero dominant word |
| `--text-hero-accent` | `clamp(2.5rem, 5vw, 4.5rem)` | 1.1 | 700 | Sans | Hero accent color line |
| `--text-h1` | `clamp(2.5rem, 5vw, 4rem)` | 1.1 | 700 | Sans | Page-level headings |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.5rem)` | 1.2 | 600 | Sans | Section headings |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | 1.3 | 600 | Sans | Card/sub-section headings |
| `--text-body-lg` | `1.125rem` | 1.7 | 400 | Sans | Intro paragraphs, descriptions |
| `--text-body` | `1rem` | 1.7 | 400 | Sans | Default body text |
| `--text-small` | `0.875rem` | 1.6 | 400 | Sans | Captions, tags, metadata |
| `--text-label` | `0.75rem` | 1.4 | 500 | Sans | `letter-spacing: 0.12em`, uppercase section labels |
| `--text-nav` | `0.9rem` | 1 | 500 | Sans | Navigation links |
| `--text-quote` | `clamp(1.5rem, 3vw, 2.25rem)` | 1.4 | 300 italic | Serif | Testimonial quotes |
| `--text-number` | `clamp(5rem, 12vw, 10rem)` | 1 | 700 | Sans | Decorative large numbers |

### Letter Spacing

```css
--tracking-tight: -0.03em;   /* Large hero headlines */
--tracking-normal: 0;         /* Body text */
--tracking-wide: 0.05em;      /* Sub-labels, tags */
--tracking-wider: 0.12em;     /* ALL CAPS section labels */
```

### Typography Rules
- **Section labels** (e.g., `"SERVICES"`, `"WORK"`) are always: `text-transform: uppercase`, `letter-spacing: 0.12em`, `font-size: 0.75rem`, `color: var(--color-accent)`, `font-weight: 500`
- **Large decorative numbers** (`"01"`, `"02"`) use `Inter 700`, extremely large size, color `#ECECEC` — background texture, not readable content
- **Body text** never exceeds `--text-body-lg` in size. Keep reading comfortable.
- **Max paragraph width:** `65ch` — never allow body text to span full viewport width.
- **No text-shadow.** No glow. No gradients on text (except one possible use of navy-to-black in hero if desired — but default is flat).

---

## 3. Spacing System

All spacing derived from a base of `8px`.

```css
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Section Padding
- **Desktop:** `padding-block: var(--space-32)` (128px top and bottom) for major sections
- **Mobile:** `padding-block: var(--space-20)` (80px)
- **Tight sections** (trust bar, CTA strip): `padding-block: var(--space-16)`

### Container Width
```css
--container-max: 1280px;
--container-padding: clamp(1.5rem, 5vw, 4rem);

.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}
```

---

## 4. Grid System

```css
--grid-cols-12: repeat(12, 1fr);
--grid-gap: clamp(1.5rem, 3vw, 2.5rem);
```

### Common Grid Patterns

| Layout | Desktop | Mobile |
|---|---|---|
| Two equal columns | `grid-template-columns: 1fr 1fr` | `1fr` |
| Content + sidebar (60/40) | `grid-template-columns: 6fr 4fr` | `1fr` |
| Three columns | `grid-template-columns: repeat(3, 1fr)` | `1fr` |
| Hero centered text | `max-width: 900px; margin: auto` | `max-width: 100%` |

---

## 5. Component Specifications

### 5.1 — Buttons

**Primary Button (Navy)**
```css
.btn-primary {
  background-color: var(--color-accent);
  color: #FFFFFF;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.875rem 2rem;
  border-radius: 2px;  /* Nearly square, very slight rounding */
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-1px);
}
```

**Inverted Button (White on Navy background)**
```css
.btn-inverted {
  background-color: #FFFFFF;
  color: var(--color-accent);
  /* same padding, border-radius, font as primary */
}
.btn-inverted:hover {
  background-color: #F0F0EE;
}
```

**Text Link**
```css
.link-arrow {
  color: var(--color-accent);
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  letter-spacing: 0.02em;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}
.link-arrow:hover {
  border-bottom-color: var(--color-accent);
}
```

### 5.2 — Navigation

```css
/* Transparent state (top of page) */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  padding: var(--space-6) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 100;
}

/* Scrolled state */
.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1px 0 var(--color-border);
  backdrop-filter: blur(8px);
}

/* Wordmark */
.nav-wordmark {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
  color: var(--color-text-primary);
  text-decoration: none;
}

/* Nav links */
.nav-link {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}
.nav-link:hover { color: var(--color-text-primary); }
```

### 5.3 — Cards

**Project Card**
```css
.project-card {
  overflow: hidden;
  cursor: pointer;
}
.project-card__image {
  width: 100%;
  aspect-ratio: 16/10;
  background-color: #1A1A1A;  /* Dark placeholder */
  overflow: hidden;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.project-card:hover .project-card__image {
  transform: scale(1.02);
}
.project-card__overlay {
  position: absolute; inset: 0;
  background: rgba(10, 36, 99, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-card:hover .project-card__overlay { opacity: 1; }
```

**Testimonial Card**
```css
.testimonial-card {
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  padding: var(--space-10) var(--space-8);
  transition: box-shadow 0.3s ease;
}
.testimonial-card:hover {
  box-shadow: 0 8px 32px var(--color-shadow);
}
.testimonial-card__quote-mark {
  font-family: var(--font-serif);
  font-size: 5rem;
  line-height: 0.5;
  color: var(--color-accent);
  font-weight: 300;
  margin-bottom: var(--space-6);
}
```

### 5.4 — Contact Form

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.form-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
.form-input,
.form-textarea {
  font-family: var(--font-sans);
  font-size: 1rem;
  padding: var(--space-4) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  background: var(--color-bg);
  color: var(--color-text-primary);
  transition: border-color 0.2s ease;
  outline: none;
}
.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-accent);
}
.form-textarea {
  min-height: 140px;
  resize: vertical;
}
```

### 5.5 — FAQ Accordion

```css
.faq-item {
  border-bottom: 1px solid var(--color-border);
  padding-block: var(--space-6);
}
.faq-question {
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 0;
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.25s ease;
  opacity: 0;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  padding-top: 0;
}
.faq-item.open .faq-answer {
  max-height: 400px;
  opacity: 1;
  padding-top: var(--space-4);
}
```

---

## 6. Animations & Interactions

### Scroll-Triggered Fade-In (Primary Animation)

Every content section below the fold fades in from slightly below when it enters the viewport.

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// IntersectionObserver implementation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Fire once only
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

**Staggered children:** When a parent contains multiple `.reveal-child` elements (e.g., 3 service cards), add `transition-delay` incrementally:
```css
.reveal-child:nth-child(1) { transition-delay: 0s; }
.reveal-child:nth-child(2) { transition-delay: 0.1s; }
.reveal-child:nth-child(3) { transition-delay: 0.2s; }
```

### Navigation Scroll Behavior
```javascript
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});
```

### Hover Transitions (Global)
All interactive elements use `transition: all 0.2s ease` unless specified otherwise. Never use `transition: all` on elements that have `transform` — always specify exact properties to avoid janky animations.

### Page Load
- No splash screen, no loading spinner.
- Hero content fades in with `opacity: 0 → 1` over `0.8s` with `animation-delay: 0.1s` on initial load. CSS animation, not JS.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-content {
  animation: fadeUp 0.8s ease 0.1s both;
}
```

---

## 7. Iconography & Visual Elements

- **No icon libraries.** The site is 100% typographic-driven. If icons are absolutely needed (e.g., social links), use inline SVG only.
- **Decorative numbers** (`01`, `02`, `03`) are the primary decorative motif.
- **Horizontal rules** (`<hr>` or CSS borders) are used as section/card separators — `1px solid var(--color-border)`.
- **Quote marks** (for testimonials) are typographic — the `"` character in large Cormorant Garamond, navy, decorative.
- **No stock photos in the UI chrome.** Project cards use real screenshots or intentional dark placeholders.
- **Star ratings** use plain Unicode: `★★★★★` in navy.
- **Checkmarks** for reassurance strips use `✓` character, not SVG icons.

---

## 8. Shadows & Depth

The site is **intentionally flat**. Shadows are used sparingly only for interactive cards.

```css
--shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);
--shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.10);
--shadow-nav: 0 1px 0 var(--color-border);
```

**No `box-shadow` on buttons.** Buttons rely on color and `transform: translateY` for hover feedback.

---

## 9. Border Radius

The site uses **near-square geometry**. Avoid rounded "app-like" corners.

```css
--radius-none: 0;
--radius-sm: 2px;    /* Buttons, inputs, cards */
--radius-md: 4px;    /* Only if needed */
```

All cards, buttons, inputs: `border-radius: 2px` maximum.  
**No `border-radius: 8px` or higher anywhere on the site.**

---

## 10. Dark Section (Ink Black)

Used in: Home page "Why Me" section and optionally the Footer.

```css
.section-dark {
  background-color: var(--color-dark-section);
  color: #FFFFFF;
}
.section-dark .section-label {
  color: var(--color-accent-light); /* Navy tint on dark bg */
}
.section-dark p {
  color: rgba(255, 255, 255, 0.72);
}
```

---

## 11. CTA Banner (Navy)

Used at the bottom of: Home, Services, Work, Testimonials, Pricing pages.

```css
.cta-banner {
  background-color: var(--color-accent);
  color: #FFFFFF;
  text-align: center;
  padding-block: var(--space-24);
}
.cta-banner h2 {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-4);
}
.cta-banner p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  margin-bottom: var(--space-8);
}
```

---

## 12. Accessibility

- **Color contrast:** All text meets WCAG AA minimum. Navy on white: ✓. Dark text on off-white: ✓. White on navy: ✓.
- **Focus states:** All interactive elements have a visible focus ring:
  ```css
  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }
  ```
- **`prefers-reduced-motion`:** All animations must be disabled for users who prefer reduced motion:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .reveal, .hero-content, * {
      animation: none !important;
      transition: none !important;
    }
  }
  ```
- **Semantic HTML:** Use correct heading hierarchy (`h1` → `h2` → `h3`). One `h1` per page only.
- **Images:** All images require descriptive `alt` attributes. Placeholder divs use `aria-hidden="true"` and `role="presentation"`.

---

## 13. Performance Guidelines

- **Font loading:** Use `display=swap` in Google Fonts URL. Preconnect to `fonts.gstatic.com`.
- **Images:** Use `loading="lazy"` on all below-fold images. Serve `.webp` format where possible.
- **CSS:** A single compiled `styles.css` file. No CSS frameworks. No utility libraries.
- **JS:** A single `main.js` file. No jQuery. No external JS libraries for animations — native IntersectionObserver and CSS transitions only.
- **Target Lighthouse score:** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90.

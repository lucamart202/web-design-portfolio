# Site Structure — Freelance Web Designer Portfolio
**Owner:** [Your Full Name] — Personal Brand  
**Target clients:** Small local businesses in the USA (focus: construction & home services)  
**Language:** English only  
**Total pages:** 6

---

## Global Elements

### Navigation (Sticky Header)
- **Position:** Fixed top, full-width, `z-index: 100`
- **Left:** Personal name as wordmark (e.g., `[FirstName LastName]`) — plain text, not a logo image
- **Right:** Navigation links — `Work` · `Services` · `Testimonials` · `Pricing` · `Contact`
- **CTA Button (right-most):** `"Let's Talk"` — navy accent pill button, links to Contact page
- **Behavior:** On scroll down >80px, background transitions from `transparent` to `white` with a subtle `box-shadow`. Smooth transition `0.3s ease`.
- **Mobile:** Hamburger icon (3 lines). Clicking opens a full-screen overlay menu with large centered links and a close (×) button. Overlay background: near-black (`#0A0A0A`), text: white.

### Footer
- **Layout:** Two columns on desktop, stacked on mobile
- **Left column:** Personal name wordmark + one-line tagline (e.g., *"Websites that work as hard as you do."*)
- **Right column:** Navigation links (same as header, minus CTA) + email address + WhatsApp link
- **Bottom bar:** Copyright line — `© [Year] [Your Name]. All rights reserved.`
- **No social media icons** unless explicitly added later.
- **Background:** Off-white (`#F5F5F3`) or near-black (designer's choice — must contrast with main body)

---

## Page 1 — Home (`/`)

### Section 1.1 — Hero (Full Viewport Height)
- **Layout:** Full-screen (`100vh`), vertically and horizontally centered content. No background image. Clean white/off-white background.
- **Typography composition (the key visual element):**
  - Line 1: `"We build"` — large serif italic, light weight, dark charcoal color
  - Line 2: `"websites"` — extremely large, bold, sans-serif, near-black, dominant visual mass
  - Line 3: `"that bring you"` — medium serif italic, lighter weight, slightly smaller than line 1
  - Line 4: `"more customers."` — large bold sans-serif, navy accent color (`#0A2463` or similar)
  - The mix of serif italic (elegant, editorial) and sans-serif bold (strong, modern) is the core aesthetic signature of the site.
- **Subheadline:** One line below the headline block — `"Clean, professional websites for local businesses in the USA. No fluff. Just results."` — small, regular weight, muted gray, max-width ~500px, centered or left-aligned depending on layout choice.
- **CTA:** Single primary button — `"See My Work"` (links to `/work`) and a secondary text link — `"Or get in touch →"` (links to `/contact`)
- **Scroll indicator:** Subtle animated downward arrow or `"scroll"` label at bottom center of hero.
- **No hero image, no gradients, no background photos.** The typography IS the hero.

### Section 1.2 — Trust Bar / Social Proof Strip
- **Layout:** Full-width horizontal strip, light gray background (`#F0F0EE`)
- **Content:** 3–4 short trust signals in a row, separated by thin vertical dividers:
  - `"5+ Projects Delivered"`
  - `"100% Client Satisfaction"`
  - `"Fast Turnaround — 2–4 Weeks"`
  - `"USA-Based Clients Only"`
- **Typography:** Small caps or uppercase tracking, muted color, no icons — pure typographic treatment.

### Section 1.3 — What I Do (Services Preview)
- **Layout:** Two-column on desktop. Left: large section label + headline. Right: 3 service cards stacked or in a 1×3 grid.
- **Left side:**
  - Section label: `"SERVICES"` — tiny uppercase, letter-spaced, navy color
  - Headline: `"Everything your business needs online."` — large, mix of serif italic and bold sans (same style as hero, scaled down)
  - Short paragraph (2–3 lines) explaining the all-in-one approach.
  - Link: `"View all services →"` — text link, navy
- **Right side — 3 Service Cards:**
  Each card contains:
  - A number label: `"01"`, `"02"`, `"03"` — large, very light gray, almost decorative
  - Service name: bold sans-serif
  - 1-sentence description
  - No icons. No card borders. Separated by thin horizontal rules.
  - Services listed: `Website Design & Development` · `Mobile-Responsive Builds` · `Ongoing Maintenance & Updates`

### Section 1.4 — Featured Work (Portfolio Teaser)
- **Layout:** Full-width section. Headline left-aligned. Below: 2 project cards side by side (desktop), stacked (mobile).
- **Section headline:** `"Selected Work"` — large, bold, minimal
- **Each project card:**
  - Large image/mockup placeholder (16:9 or 4:3 ratio)
  - Project name — bold
  - Client industry tag — e.g., `"Roofing Company · USA"`
  - Short 1-line result or description
  - `"View Project →"` link
- **Note for developer:** Images will be placeholders. The design must make placeholder blocks look intentional (dark fill with centered project number).
- **Below cards:** Centered CTA — `"See All Projects →"` linking to `/work`

### Section 1.5 — Value Proposition (Why Me)
- **Layout:** Full-width, dark background section (`#0A0A0A`), white text — creates strong contrast break in the page flow.
- **Content:** 3-column grid (desktop), stacked (mobile). Each column:
  - Large number or symbol (decorative, navy or white)
  - Short bold headline
  - 2-sentence explanation
  - Columns:
    1. `"More Customers"` — Your website becomes your best salesperson, working 24/7.
    2. `"Zero Headaches"` — I handle design, development, and launch. You focus on your business.
    3. `"Built to Last"` — Fast, mobile-ready, and easy to update. No tech knowledge needed.

### Section 1.6 — Testimonials Teaser
- **Layout:** Light background, centered content. 1 featured quote (the strongest testimonial).
- **Quote typography:** Large italic serif, centered, max-width ~700px
- **Attribution:** Client name + business name + location, small, uppercase tracking
- **Below:** Text link — `"Read all testimonials →"` linking to `/testimonials`

### Section 1.7 — CTA Banner (Pre-Footer)
- **Layout:** Full-width, navy background (`#0A2463`), white text, centered.
- **Headline:** `"Ready to get more customers online?"` — large, bold
- **Sub-text:** `"Let's build something great together. No commitment required."` — small, white/70% opacity
- **Button:** `"Start a Project"` — white background, navy text (inverted from rest of site)

---

## Page 2 — Services (`/services`)

### Section 2.1 — Page Hero
- **Layout:** Full-width, ~60vh tall. White background.
- **Content:**
  - Section label: `"SERVICES"` — tiny uppercase nav label
  - Headline (typography mix): `"Simple process."` (serif italic) + `"Powerful results."` (bold sans-serif, navy)
  - 1-line subheadline explaining the scope

### Section 2.2 — Services Detail
- **Layout:** Alternating two-column rows (image/mockup left + text right, then text left + image/mockup right). 3 rows total.
- **Each row contains:**
  - Service number: `"01"`, `"02"`, `"03"` — large decorative, light gray
  - Service name: bold, large
  - Full description paragraph (3–5 sentences): what it includes, who it's for, and why it matters
  - Deliverables list: 4–6 bullet points (plain dashes, no icons)
  - No pricing shown
- **Services:**
  1. **Website Design & Development** — Custom designed, hand-coded websites. Tailored to the client's brand, goals, and customers.
  2. **Mobile-Responsive Builds** — Every site is built mobile-first, ensuring perfect display on any device.
  3. **Ongoing Maintenance & Support** — Monthly plans for updates, security, and performance monitoring.

### Section 2.3 — Process (How It Works)
- **Layout:** Full-width, light gray background. 4 horizontal steps on desktop, vertical on mobile.
- **Steps:**
  1. `"Discovery"` — We talk about your business, goals, and audience.
  2. `"Design"` — I create mockups and get your approval before building.
  3. `"Build"` — I develop the full site, optimized for speed and mobile.
  4. `"Launch"` — Your site goes live. I handle everything technical.
- **Each step:** Number + title + 1-sentence description. Connected by a thin horizontal line (desktop).

### Section 2.4 — CTA
- Same navy CTA banner as Home page Section 1.7.

---

## Page 3 — Work / Portfolio (`/work`)

### Section 3.1 — Page Hero
- **Layout:** ~50vh, white background.
- **Headline (typography mix):** `"Projects that"` (serif italic) + `"speak for themselves."` (bold sans-serif)
- **Short intro paragraph:** 2 sentences about the types of clients and projects.

### Section 3.2 — Project Grid
- **Layout:** Masonry-style or uniform 2-column grid. Each card is clickable.
- **Filter bar (optional):** Simple text tabs — `"All"` · `"Construction"` · `"Home Services"` — above the grid. Plain text, no fancy UI.
- **Each project card:**
  - Full-bleed image/mockup (placeholder: dark fill + project title centered in white text)
  - On hover: slight scale-up (`transform: scale(1.02)`), overlay appears with project name + `"View →"`
  - Below image: Client industry tag + project name
- **Note:** 4–6 project slots. Slots without real content show a stylized placeholder.

### Section 3.3 — Note on Portfolio
- **Layout:** Simple centered text block.
- **Content:** `"New projects available soon. In the meantime, reach out to discuss your vision."` + CTA button to `/contact`
- **This section is shown only while portfolio is sparse and removed once full.**

---

## Page 4 — Testimonials (`/testimonials`)

### Section 4.1 — Page Hero
- **Headline:** `"What clients"` (serif italic) + `"are saying."` (bold sans-serif)
- **Short paragraph:** 1–2 sentences setting context.

### Section 4.2 — Testimonials Grid
- **Layout:** 2-column grid on desktop, 1-column on mobile.
- **Each testimonial card:**
  - Opening quote mark `"` — large, navy, decorative
  - Quote text — medium italic serif, 2–5 sentences
  - Divider line (thin)
  - Client name — bold, sans-serif
  - Business name + city/state — small, muted gray
  - Star rating (5 stars) — simple `★★★★★` text characters in navy
- **Cards have:** Subtle border (`1px solid #E0E0E0`), generous padding, white background, slight `box-shadow` on hover.

### Section 4.3 — CTA
- Same navy CTA banner as Home.

---

## Page 5 — Pricing (`/pricing`)

### Section 5.1 — Page Hero
- **Headline:** `"Transparent."` (serif italic, large) + `"No surprises."` (bold sans-serif, navy)
- **Sub-text:** `"Every project is custom quoted. Here's what goes into it."`

### Section 5.2 — What's Included (Value-Based, No Numbers)
- **Layout:** 3-column feature grid, white background.
- **No pricing tiers, no dollar amounts.**
- **Instead:** 3 columns describing what every project includes:
  1. `"Custom Design"` — Built around your brand, not a template.
  2. `"Full Development"` — Clean, hand-written code. Fast and reliable.
  3. `"Launch & Support"` — I stay involved after launch to make sure everything runs smoothly.
- **Below:** Large centered CTA — `"Get a free quote"` → links to `/contact`

### Section 5.3 — FAQ
- **Layout:** Accordion/collapsible items. Max-width ~750px, centered.
- **Questions:**
  1. How long does a project take?
  2. Do I need to provide content and photos?
  3. What if I need changes after launch?
  4. Do you offer payment plans?
  5. What makes you different from using a website builder (Wix, Squarespace)?
- **Style:** Question in bold, answer expands on click. Thin divider lines between items. No heavy UI chrome.

### Section 5.4 — CTA
- Same navy CTA banner.

---

## Page 6 — Contact (`/contact`)

### Section 6.1 — Page Hero
- **Headline:** `"Let's build"` (serif italic) + `"something together."` (bold sans-serif, navy)
- **Sub-text:** `"Tell me about your business and what you need. I'll get back to you within 24 hours."`

### Section 6.2 — Contact Layout
- **Two-column layout (desktop):**
  - **Left column — Contact Info:**
    - Section label: `"GET IN TOUCH"`
    - Email address (linked `mailto:`)
    - WhatsApp link — `"Chat on WhatsApp →"` (opens `wa.me/[number]`)
    - Short availability note: e.g., `"Mon–Fri, 9am–6pm EST"`
  - **Right column — Contact Form:**
    - Fields: `Name` · `Business Name` · `Email` · `Phone (optional)` · `What do you need?` (textarea, labeled with placeholder: *"Tell me about your business and your goals…"*)
    - Submit button: `"Send Message"` — full-width, navy background
    - No CAPTCHA visible. Honeypot field in HTML for spam protection.
    - Success state: replaces form with a confirmation message — `"Thanks! I'll be in touch within 24 hours."`

### Section 6.3 — Reassurance Strip
- **Layout:** 3 small inline trust signals below the form.
- **Content:** `"No commitment required"` · `"Response within 24h"` · `"Free consultation"`
- **Style:** Small text, checkmark prefix (`✓`), inline, centered. Muted color.

---

## URL Map

| Page | URL |
|---|---|
| Home | `/` |
| Services | `/services` |
| Work / Portfolio | `/work` |
| Testimonials | `/testimonials` |
| Pricing | `/pricing` |
| Contact | `/contact` |

---

## Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |
| Wide | > 1440px |

All layouts are **mobile-first**. Desktop enhancements are applied via `min-width` media queries.

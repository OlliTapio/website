# otl.fi — Personal CV & Blog

Personal portfolio website for Olli Lehikoinen, primarily used for job seeking in the EU/Nordic market. Serves as both a CV/resume and a blog about entrepreneurship and software development. The target audience is recruiters and hiring managers familiar with Nordic norms (e.g., Finnish education timelines, military service).

## Purpose

- Present professional experience, education, and testimonials to recruiters and hiring managers
- Host blog posts about startup founding, consulting, and engineering career
- Project a warm, approachable but credible personal brand

## Tech Stack

- **Static site**: Vanilla HTML/CSS/JS, no build step
- **Hosting**: GitHub Pages (auto-deploy on push to `main`)
- **Domain**: otl.fi (configured via CNAME)
- **Fonts**: Google Fonts (Fraunces headings, Caveat accent, Nunito Sans body)
- **Dev server**: `python3 -m http.server 8000`

## Structure

```
index.html          — Homepage (hero, about, experience, education, testimonials, blog, contact)
blog/index.html     — Blog listing
blog/*.html         — Individual blog posts
css/style.css       — All styling (~1160 lines, CSS variables, responsive, animations, print CV)
js/includes.js      — Dynamic header/footer loading, peek character interaction
includes/           — Shared header.html and footer.html (loaded via fetch)
assets/             — Images, favicons, peek character PNG
```

## Design

- Warm cream background (#fef6e4) with wine red primary (#c44536) and orange accent (#e86a33)
- Pastel supporting colors: mint (#8bd3dd), peach (#f3d2c1), lavender (#d4c1ec)
- Playful touches: waving emoji, peeking character animation in contact section
- Timeline-style experience section with gradient line and animated dots
- Responsive at 640px breakpoint, respects prefers-reduced-motion

## Key Decisions

- No framework/build tool — keeps it simple, fast, and easy to deploy
- Footer copyright year is static (update manually each January)
- Header/footer loaded dynamically via `data-include` attributes
- "Download CV" button triggers `window.print()` — print stylesheet formats the page as a clean one-page CV
- Print CSS hides non-CV sections (blog, testimonials, contact) and injects contact info via `::after`

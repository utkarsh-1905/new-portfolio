# CLAUDE.md — Portfolio Project Context

## Project Overview

Personal portfolio website for **Utkarsh Tripathi** (`utkarsh-1905`).  
Live URL: `https://utkarshtripathi.in`  
Design philosophy: **Neumorphism (soft UI)** — extruded/debossed surfaces, no borders, soft shadows.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | SvelteKit 2 (adapter-node) |
| Language | TypeScript 5 |
| Styling | Custom CSS (no Tailwind) — neumorphic design system |
| Build | Vite 5 |
| Data | Local TypeScript file (`src/lib/data/index.ts`) — no database |
| Auth/CDN | None |

---

## Project Structure

```
src/
  routes/
    +layout.svelte          # Root layout: Navbar + Spotify widget + Footer
    +page.svelte            # Single-page app: Body + About + Blogs + Contact
    +page.server.ts         # SSR data loader: blogs from APIs, local data arrays
    getCurrentPlaying/      # Spotify currently-playing API endpoint
    getLastPlayed/          # Spotify last-played API endpoint
    sitemap.xml/            # Sitemap (dynamic, returns today's date)
  lib/
    body.svelte             # Landing hero: typewriter greeting + systemctl terminal widget
    navbar.svelte           # Fixed top nav + mobile hamburger drawer
    footer.svelte           # Skill icons marquee (continuous, doubled) + social links
    theme.svelte            # Light/dark toggle — light is DEFAULT, dark opt-in via localStorage
    tabs.svelte             # Tab nav: experience / projects / certifications / resume
    spotify.svelte          # Floating Spotify widget (fixed bottom-right, collapses)
    blog_card.svelte        # Individual blog card (thumbnail + title)
    loadingPage.svelte      # Full-page loading spinner
    skill-icons.svelte      # Inline SVG skill icons (~264KB) — animation owned by footer.svelte
    fetchBlogs.ts           # Medium RSS + Dev.to API fetchers
    github_api.ts           # Octokit GitHub repos fetcher — UNUSED (GitHub tab removed)
    loading.ts              # Svelte writable store for loading state
    server/
      spotify.ts            # Shared Spotify token-refresh helper (server-only)
    data/
      index.ts              # Local data store: experience[], projects[], certs[]
    about/+page.svelte      # About section wrapper (tabs coordinator)
    blogs/+page.svelte      # Swiper carousel for blog cards
    contact/+page.svelte    # Contact form (Web3Forms) + Calendly button
    experiencePages/
      about.svelte          # Bio text + tech stack list
      certs.svelte          # Certifications grid (replaces old github.svelte tab)
      projects.svelte       # Project cards — featured (full-width) + grid layout
      work.svelte           # Work experience timeline
      resume.svelte         # PDF iframe from /resume.pdf (static/)
static/
  robots.txt               # Allow all + Sitemap reference
  resume.pdf               # Drop resume PDF here (not in repo — add to .gitignore if private)
scripts/
  spotify-auth.js           # One-time local script to get SPOTIFY_REFRESH_TOKEN
```

---

## Design System — Neumorphism

### Core Principle
Elements appear extruded FROM the background, not placed ON top of it.  
Two shadows: one darker, one lighter than the background colour.

### CSS Variables — Light mode (default)

```css
--bg: #f0ece4;
--neumorph-doffset: #ccc7bc;
--neumorph-loffset: #ffffff;
--neumorph-blur-radius: 14px;
--neumorph-distance: 6px;
--font: #1a0a3c;
--sub-font: #2e2248;
--muted: #8c7fa0;
--accent: #7c3aed;
--icon-filter: brightness(0) opacity(0.65);  /* makes white SVGs visible */
```

### CSS Variables — Dark mode

```css
--bg: #13111c;
--neumorph-doffset: #0c0a13;
--neumorph-loffset: #1f1b2e;
--font: #e8c547;
--sub-font: #b8b0d0;
--muted: #5e5878;
--accent: #a78bfa;
--icon-filter: none;
```

### Shadow Patterns
```css
/* Raised (embossed) */
--shadow-raised:
  calc(var(--nd)) calc(var(--nd)) var(--nb) var(--neumorph-doffset),
  calc(-1 * var(--nd)) calc(-1 * var(--nd)) var(--nb) var(--neumorph-loffset);

/* Pressed (inset/debossed) */
--shadow-inset:
  inset calc(var(--nd)) calc(var(--nd)) var(--nb) var(--neumorph-doffset),
  inset calc(-1 * var(--nd)) calc(-1 * var(--nd)) var(--nb) var(--neumorph-loffset);
```
Shorthand: `--nd = --neumorph-distance`, `--nb = --neumorph-blur-radius`

---

## Data Sources

| Source | Purpose | Auth |
|--------|---------|------|
| `src/lib/data/index.ts` | experience, projects, certs — fully static | None |
| Medium RSS | Blog posts via `api.rss2json.com` | None |
| Dev.to API | Blog posts | `VITE_DEVTO` env var |
| Spotify API | Currently/last played track (floating widget) | Refresh-token flow — see env vars |
| Web3Forms | Contact form submissions | Public key hardcoded in contact component |
| Calendly | Meeting scheduler popup | URL: `https://calendly.com/heyutkarsh/30min` |

**Removed:** Supabase (replaced by local data file), GitHub API (GitHub tab removed).

---

## Environment Variables

All runtime — nothing is baked into the Docker image at build time.

```bash
# Blog
VITE_DEVTO=                  # Dev.to API key (server-side via $env/dynamic/private)

# Spotify — refresh-token flow (tokens auto-renewed per request, never expire unless revoked)
SPOTIFY_CLIENT_ID=           # From developer.spotify.com/dashboard
SPOTIFY_CLIENT_SECRET=       # From developer.spotify.com/dashboard
SPOTIFY_REFRESH_TOKEN=       # One-time setup: SPOTIFY_CLIENT_ID=x SPOTIFY_CLIENT_SECRET=y make spotify-auth
                             # Open http://127.0.0.1:8888/login — token printed to terminal

# Removed / no longer needed:
# VITE_GITHUB_KEY    — GitHub tab removed
# VITE_SPOTIFY_OAUTH — replaced by refresh-token flow above
```

---

## Spotify Widget

- `src/lib/spotify.svelte` — fixed bottom-right floating card
- Polls `/getCurrentPlaying` every 30 seconds; falls back to `/getLastPlayed` if nothing playing
- Shows: album art, track name, artist, animated equaliser bars (when live), green pulse dot
- Collapsible: click `—` to shrink to album art thumbnail; live dot shown on thumbnail
- Silently does nothing if `SPOTIFY_CLIENT_ID` / `SPOTIFY_CLIENT_SECRET` / `SPOTIFY_REFRESH_TOKEN` are unset
- Server routes: `src/routes/getCurrentPlaying/+server.ts` and `getLastPlayed/+server.ts`
- Token helper: `src/lib/server/spotify.ts` — exchanges refresh token for access token on each call

---

## Skills Marquee

- Icons are inline SVG in `src/lib/skill-icons.svelte` (no animation in that file)
- `footer.svelte` renders `<Skills />` **twice** inside `.marquee-track`
- `.marquee-track` animates `translateX(0)` → `translateX(-50%)` at 40s linear infinite
- Seamless because content is doubled — the reset point is invisible
- Pauses on hover via `animation-play-state: paused`

---

## SEO

- Meta tags in `src/routes/+layout.svelte`: title, description, keywords, canonical, og:*, twitter:*
- JSON-LD Person schema (Google rich results)
- `static/robots.txt` — Allow: * + Sitemap reference
- `src/routes/sitemap.xml/+server.ts` — dynamic `lastmod` (today's date)
- `src/app.html` — `viewport` includes `initial-scale=1`, body has `data-sveltekit-preload-data="hover"`

---

## Deploy

- Multi-stage Dockerfile: builder (full install + build) → runner (prod deps only, non-root user)
- `docker-compose.yml` — reads secrets from `.env` at runtime via `env_file`
- `.env.example` — template with all required vars
- `Makefile` targets: `dev`, `build`, `start`, `preview`, `lint`, `format`, `check`, `clean`, `docker-build`, `docker-run`, `docker-compose-up`, `docker-compose-down`, `spotify-auth`

---

## Fonts

- **UI font**: Space Grotesk (Google Fonts) — replaced Inter
- **Code/accent font**: Cascadia Code (CDN) — terminal widget, stack values, monospace spans

---

## Swiper Usage

Blogs section uses `swiper/svelte` (Swiper v8 API). Do not upgrade to v9+ without updating `blogs/+page.svelte` imports — the Svelte integration changed significantly.

---

## Responsive Breakpoints

| Breakpoint | Layout change |
|-----------|--------------|
| 1024px | Tablet: nav item widths, subtitle font |
| 768px | Mobile: hamburger menu activates |
| 586px | Single-column layouts |
| 480px | Contact form stacks vertically, Spotify widget shrinks |
| 375px / 320px | Micro adjustments |

---

## Known Issues

1. **`blog_card.svelte`** broken click handler: `on:click={navigateToBlog(link)}` invokes immediately on render. Should be `on:click={() => navigateToBlog(link)}`.
2. **`skill-icons.svelte`** is ~264KB of inline SVG. Rendered twice for the marquee. Consider extracting to static SVG sprite if performance degrades.
3. **`github_api.ts`** is unused (GitHub tab removed) but left in place. Safe to delete.
4. **`static/resume.pdf`** must be manually placed — not committed to the repo.

---

## User Preferences

- Keep neumorphic design — it's intentional and brand-defining
- Light mode is the default; dark mode is opt-in (stored in localStorage key `'theme'`)
- Social handles: GitHub `utkarsh-1905`, LinkedIn `utkarsh1905`, Twitter/X `utripathi2002`
- Email: `utripathi2002@gmail.com`
- Currently employed at RapidFort — **not open to new roles**

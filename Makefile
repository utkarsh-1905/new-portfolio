IMAGE  ?= portfolio
PORT   ?= 3000

.PHONY: dev build preview lint format check clean \
        deploy deploy-preview spotify-auth

# ── Local dev ─────────────────────────────────────────────────

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

format:
	npm run format

check:
	npm run check

clean:
	rm -rf .svelte-kit

# ── Spotify: one-time refresh-token setup ─────────────────────
# Usage: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy make spotify-auth
# Then open http://127.0.0.1:8888/login in your browser.

spotify-auth:
	node scripts/spotify-auth.js

# ── Cloudflare Pages ──────────────────────────────────────────

deploy: build
	npx wrangler pages deploy .svelte-kit/cloudflare --project-name=portfolio

deploy-preview: build
	npx wrangler pages deploy .svelte-kit/cloudflare --project-name=portfolio --branch=preview

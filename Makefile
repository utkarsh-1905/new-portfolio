PROJECT ?= portfolio

.PHONY: dev dev-cf build preview lint format check clean \
        deploy deploy-preview secrets secrets-list spotify-auth

# ── Local dev ─────────────────────────────────────────────────

dev:
	npm run dev

# Run with actual Cloudflare Workers runtime locally
# Reads .dev.vars automatically — copy .dev.vars.example to .dev.vars first
dev-cf: build
	npx wrangler pages dev .svelte-kit/cloudflare

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

# ── Cloudflare Pages — secrets ────────────────────────────────
# 1. Copy secrets.example.json to secrets.json and fill in values
# 2. Run: make secrets
# This uploads all keys to the Cloudflare Pages project at once.

secrets:
	npx wrangler pages secret bulk secrets.json --project-name=$(PROJECT)

secrets-list:
	npx wrangler pages secret list --project-name=$(PROJECT)

# ── Cloudflare Pages — deploy ─────────────────────────────────

deploy: build
	npx wrangler pages deploy .svelte-kit/cloudflare --project-name=$(PROJECT)

deploy-preview: build
	npx wrangler pages deploy .svelte-kit/cloudflare --project-name=$(PROJECT) --branch=preview

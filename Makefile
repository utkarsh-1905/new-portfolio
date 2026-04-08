IMAGE  ?= portfolio
PORT   ?= 3000

.PHONY: dev build start preview lint format check clean \
        docker-build docker-run docker-stop docker-compose-up docker-compose-down spotify-auth

# ── Local dev ─────────────────────────────────────────────────

dev:
	npm run dev

build:
	npm run build

start: build
	node build/index.js

preview:
	npm run preview

lint:
	npm run lint

format:
	npm run format

check:
	npm run check

clean:
	rm -rf build .svelte-kit

# ── Spotify: one-time refresh-token setup ─────────────────────
# Usage: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy make spotify-auth
# Then open http://localhost:8888/login in your browser.

spotify-auth:
	node scripts/spotify-auth.js

# ── Docker ────────────────────────────────────────────────────

docker-build:
	docker build \
	  --build-arg VITE_DEVTO="$(VITE_DEVTO)" \
	  -t $(IMAGE) .

docker-run:
	docker run --rm -p $(PORT):3000 \
	  -e VITE_DEVTO="$(VITE_DEVTO)" \
	  -e SPOTIFY_CLIENT_ID="$(SPOTIFY_CLIENT_ID)" \
	  -e SPOTIFY_CLIENT_SECRET="$(SPOTIFY_CLIENT_SECRET)" \
	  -e SPOTIFY_REFRESH_TOKEN="$(SPOTIFY_REFRESH_TOKEN)" \
	  --name $(IMAGE) \
	  $(IMAGE)

docker-stop:
	docker stop $(IMAGE) 2>/dev/null || true

# ── Docker Compose (recommended for server deploy) ────────────

docker-compose-up:
	docker compose up -d --build

docker-compose-down:
	docker compose down

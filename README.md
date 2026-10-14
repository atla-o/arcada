# utopiasocial

utopiasocial is a utopia social club. Five clubs meet in this house:

- ancestry club
- intellectual club
- leisure club
- political club
- spiritual club

Leisure includes creative work and the recreation studios.

Those are the names. Membership is show-up, help, keep the peace. Ink is black. Paper is white.

This repository is the public site: a pinned home lander, club pages, papers, a membership note of interest, and the events board.

## Run locally

Node 20 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `ADMIN_PASSWORD` in `.env.local` to use `/admin/login`.

## Pages

- `/` — pinned lander: the five clubs as squared cards
- `/clubs/ancestry`, `/clubs/intellectual`, `/clubs/leisure`, `/clubs/political`, `/clubs/spiritual`
- `/clubs/{slug}/documents` — that club’s papers, accordion
- `/documents` — purpose, membership, land, events, legal
- `/events` — notice board
- `/membership` — one-screen note of interest
- `/admin/login`, `/admin/members` — private roll (not linked from the public chrome)

The header is the arc mark, linking home. The footer is **utopiasocial** (Purpose) – **utopia social club** (membership).

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t arcada-club .
docker run --rm -p 8080:8080 arcada-club
```

## License

MIT. See [LICENSE](LICENSE).

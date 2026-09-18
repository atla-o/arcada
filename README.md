# Arcada

Arcada is a social club. Four clubs meet in this house:

- ancestry club
- spiritual club
- political club
- education club

Those are the names. This repository is the public site: club pages, papers, a membership note of interest, and the events board. Ink is black. Paper is white.

## Run locally

Node 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

`npm start` serves the production build. Set `PORT` if you need a port other than 3000.

## Docker

The image is built for Cloud Run later. It listens on `8080` by default (`PORT` can override).

```bash
docker build -t arcada-club .
docker run --rm -p 8080:8080 arcada-club
```

## License

MIT. See [LICENSE](LICENSE).

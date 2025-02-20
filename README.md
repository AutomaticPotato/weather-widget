## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

The application is built with a nitro backend that fetches weather data. The location is hardcoded to Groningen as I could nog find a free reverse geomapping API. If this was available, the code can be easily adapter to use the users location.

# bytechain-shared

Shared TypeScript types, API response contracts and contract ABIs used across
the ByteChain Academy repositories. This package is the single source of truth
for type contracts between services.

## Part of the ByteChain Academy multi-repo ecosystem

| Repo | Purpose |
|------|---------|
| [bytechain-academy-frontend](https://github.com/WeAcademy/bytechain-academy-frontend) | Next.js web app — UI for students, tutors and admins |
| [bytechain-academy-backend](https://github.com/WeAcademy/bytechain-academy-backend) | NestJS REST API — auth, courses, progress, DAO, certificates |
| [bytechain-currency-hub](https://github.com/WeAcademy/bytechain-currency-hub) | Standalone crypto currency history service |
| [bytechain-contracts](https://github.com/WeAcademy/bytechain-contracts) | Smart contracts — DAO governance, SBT certificates, reward token |
| [bytechain-indexer](https://github.com/WeAcademy/bytechain-indexer) | On-chain event listener that syncs blockchain state to the backend |
| **bytechain-shared** (this repo) | Shared TypeScript types, API contracts and contract ABIs |

## Installation

The package is published to GitHub Packages under the `@weacademy` scope.
Configure the registry once per consuming repository:

```bash
# .npmrc (or an equivalent `npm config set` command)
@weacademy:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then install it:

```bash
npm install @weacademy/bytechain-shared
```

During local development you can link the package instead:

```bash
# In a consuming repository
npm install ../bytechain-shared
```

## Usage

```ts
import type {
  AuthResponseDto,
  CourseResponseDto,
  PaginatedResponse,
} from "@weacademy/bytechain-shared";

const response = await fetch(`${API_URL}/api/v1/courses`);
const courses = (await response.json()) as PaginatedResponse<CourseResponseDto>;
```

The package ships both ESM (`dist/index.js`) and CommonJS (`dist/index.cjs`)
builds, with TypeScript declarations for each entry point.

### What lives here

- **Auth and course response contracts** — the wire shapes returned by the
  backend for authentication, courses, lessons and enrolments.
- **Pagination** — the shared `{ data, total, page, limit, totalPages }` shape.
- **Contract ABIs** — generated ABI JSON from `bytechain-contracts`, consumed by
  the frontend and indexer instead of being duplicated.

### Dates on the wire

JSON has no `Date` type. All timestamp fields in the response contracts are
ISO-8601 strings (`2026-04-22T00:00:00.000Z`). Backend DTO classes construct
`Date` values and Nest serialises them; consumers of `fetch` always receive
strings, so the shared contracts describe strings.

## Development

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

`npm run build` uses [tsup](https://tsup.egoist.dev/) to emit ESM, CJS and
declaration files into `dist/`. The published tarball contains only `dist/`,
`README.md` and `LICENSE`.

### Scripts

| Command | Description |
|---|---|
| `npm run build` | Bundle ESM + CJS and emit `.d.ts` files |
| `npm run dev` | Rebuild on change |
| `npm run lint` | ESLint (flat config, TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Vitest |
| `npm run test:watch` | Vitest in watch mode |

## Publishing

Releases are published to GitHub Packages by the `Publish` workflow when a
GitHub release is published. The workflow uses the repository `GITHUB_TOKEN`
with `packages: write`; `publishConfig` pins the registry and public access.

## Contributing

See the [ByteChain Academy contribution guide](https://github.com/WeAcademy/ByteChain-Academy/blob/main/CONTRIBUTING.md)
for branch naming, PR standards and the Drips Wave contribution workflow.

## License

MIT

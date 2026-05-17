# bytechain-shared

Shared TypeScript types, contract ABIs, and API response interfaces used across all ByteChain Academy repos. This package is the single source of truth for all type contracts between services.

## Part of the ByteChain Academy multi-repo ecosystem

| Repo | Purpose |
|------|---------|
| [bytechain-academy-frontend](https://github.com/WeAcademy/bytechain-academy-frontend) | Next.js web app — UI for students, tutors, and admins |
| [bytechain-academy-backend](https://github.com/WeAcademy/bytechain-academy-backend) | NestJS REST API — auth, courses, progress, DAO, certificates |
| [bytechain-currency-hub](https://github.com/WeAcademy/bytechain-currency-hub) | Standalone crypto currency history data service |
| [bytechain-contracts](https://github.com/WeAcademy/bytechain-contracts) | Smart contracts — DAO governance, SBT certificates, reward token |
| [bytechain-indexer](https://github.com/WeAcademy/bytechain-indexer) | On-chain event listener that syncs blockchain state to the backend |
| **bytechain-shared** (this repo) | Shared TypeScript types and contract ABIs used across all repos |

---

## What lives here

### TypeScript types
Shared interfaces and types that are consumed by multiple repos so they never drift out of sync:

- `User`, `Course`, `Lesson`, `Quiz`, `Progress`, `Certificate` — core domain entities
- - `DAOProposal`, `DAOVote` — governance types
  - - `CurrencyEntry`, `HistoricalDataPoint` — currency hub types
    - - API request/response types (DTOs) to keep frontend and backend contracts aligned
     
      - ### Contract ABIs
      - Auto-generated ABI JSON files exported from [bytechain-contracts](https://github.com/WeAcademy/bytechain-contracts) after compilation. Both the frontend (for wallet interactions via wagmi/viem) and the indexer (for event listening) import ABIs from here rather than duplicating them.
     
      - - `ByteChainDAO.abi.json`
        - - `ByteChainCertificate.abi.json`
          - - `ByteChainToken.abi.json`
           
            - ---

            ## Planned package structure

            ```
            bytechain-shared/
            ├── src/
            │   ├── types/
            │   │   ├── user.types.ts
            │   │   ├── course.types.ts
            │   │   ├── dao.types.ts
            │   │   ├── currency.types.ts
            │   │   └── index.ts
            │   ├── abis/
            │   │   ├── ByteChainDAO.abi.json
            │   │   ├── ByteChainCertificate.abi.json
            │   │   └── ByteChainToken.abi.json
            │   └── index.ts
            ├── package.json
            └── tsconfig.json
            ```

            ---

            ## How other repos consume this package

            Once published (as a GitHub Package or npm package), other repos install it as:

            ```bash
            npm install @weacademy/bytechain-shared
            ```

            Or during development, via a local workspace link:

            ```bash
            # In each consuming repo's package.json
            "@weacademy/bytechain-shared": "file:../bytechain-shared"
            ```

            ---

            ## Contributing

            See [CONTRIBUTING.md](https://github.com/WeAcademy/ByteChain-Academy/blob/main/CONTRIBUTING.md) for branch naming, PR standards, and the Drips Wave contribution workflow.

            ## License

            MIT

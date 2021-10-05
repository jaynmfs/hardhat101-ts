# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## Extended

### TypeScript

#### Install deps for TypeScript

```bash
npm install --save-dev ts-node typescript
npm install --save-dev chai @types/node @types/mocha @types/chai
```

#### Create tsconfig.json file

```json
// tsconfig.json

{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist"
  },
  "include": ["./scripts", "./test"],
  "files": ["./hardhat.config.ts"]
}
```

#### Rename and Replace

- rename all file .js to .ts, e.g. hardhat.config.js, scripts/sample-script.js, test/sample-script.js
- replace all "require" with "import", "import ... from ...", "import { ... } from ..."
- replace "module.exports = ..." with "export ...", "export default ..."

### Type-Safe smart contract interaction with TypeChain

#### Install deps fot TypeChain

```bash
npm install --save-dev typechain @typechain/hardhat @typechain/ethers-v5
```

Add code below to the top of the "hardhat.config.ts" file

```ts
// hardhat.config.ts

import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
...
```

#### Include "typechain" folder to project

```json
// tsconfig.json
...

  "compilerOptions": {
    ...
    "resolveJsonModule": true
  },
  "include": ["./scripts", "./test", "./typechain"],

...
```

#### Add TypeChain configuration to "hardhat.config.ts" file

```ts
typechain: {
  outDir: 'src/types',
  target: 'ethers-v5',
  alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
},
```

### Env file for secret value

#### Install deps for .env

```bash
npm install --save dotenv
```

#### Add env configuration to "hardhat.config.ts" file

```ts
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config() // if use this, env in .env file in root directory will be included

// dotenv.config({
//   path: path.json(__dirname, 'path/to/your/env/fle')
// })

....
```

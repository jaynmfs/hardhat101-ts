// require("@nomiclabs/hardhat-waffle");
import { HardhatUserConfig, task } from 'hardhat/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import * as dotenv from 'dotenv';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.4",
// };

const mnemonic: string = `${String(process.env.MNEMONIC || '')}`;  // opt 1: with Mnemonic
// const privateKey: string = `${String(process.env.PRIVATE_KEY || '')}`; // opt 2: with Private Key

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: String(process.env.NETWORKS_ROPSTEN_URL || ''),  // get from alchemy.com
      accounts: { mnemonic }, // opt 1: with Mnemonic
      // accounts: [ privateKey ] // opt 2: with Private Key
    }
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
}

export default config

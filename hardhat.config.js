require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
require('hardhat-deploy');

module.exports = {
  solidity: "0.8.17",
  namedAccounts: {
    deployer: 0
  },
  networks: {
    rinkeby: {
      url: process.env.INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    localhost: {
      url: 'http://127.0.0.1:8545/'
    },
    hardhat: {
      chainId: 1337,
    }
  },
  paths: {
    artifacts: './frontend/simple-dapp/lib/artifacts',
  },
};

const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['0xD1802e45987A6410401FE2530C14236254255302'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});

module.exports = {
  networks: {
    development: {
      provider: () => provider,
      network_id: "97"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

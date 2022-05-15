require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "701371ab26324c9aa35e5d98c7622b63";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/701371ab26324c9aa35e5d98c7622b63", // TODO: move to .ENV and replace with `https://polygon-mumbai.infura.io/v3/${infura.projectId}`
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/701371ab26324c9aa35e5d98c7622b63",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};

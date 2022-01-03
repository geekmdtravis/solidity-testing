import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import EarthlingsToken from "./contracts/Earthlings.json";

const options = {
  web3: {
    block: false,
  },
  contracts: [SimpleStorage, ComplexStorage, EarthlingsToken],
  events: {
    SimpleStorage: ["StorageSet"],
  },
  polls: {
    accounts: 3000,
    blocks: 3000,
  },
};

export default options;

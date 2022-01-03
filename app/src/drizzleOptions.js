import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";

const options = {
  web3: {
    block: false,
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken],
  events: {
    SimpleStorage: ["StorageSet"],
  },
  polls: {
    accounts: 3000,
    blocks: 3000,
  },
};

export default options;

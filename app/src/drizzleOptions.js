import Web3 from "web3";
import Earthlings from "./contracts/Earthlings.json";

const options = {
  web3: {
    block: false,
  },
  contracts: [Earthlings],
  polls: {
    accounts: 3000,
    blocks: 3000,
  },
};

export default options;

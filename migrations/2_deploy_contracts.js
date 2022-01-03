const SimpleStorage = artifacts.require("SimpleStorage");
const Earthlings = artifacts.require("Earthlings");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Earthlings);
  deployer.deploy(ComplexStorage);
};

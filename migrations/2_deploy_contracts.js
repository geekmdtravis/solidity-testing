const Earthlings = artifacts.require("Earthlings");

module.exports = function (deployer) {
  deployer.deploy(Earthlings);
};

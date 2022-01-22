const BlockFeit = artifacts.require("./BlockFeit");

module.exports = function (deployer) {
  deployer.deploy(BlockFeit);
};

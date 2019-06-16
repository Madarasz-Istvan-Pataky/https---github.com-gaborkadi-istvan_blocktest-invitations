const Migrations = artifacts.require("./Migrations");
const ERC20 = artifacts.require("./ERC20.sol");

//const SafeMath = artifacts.require("./math/SafeMath.sol");
//const IERC20 = artifacts.require("./IERC20.sol");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
/*module.exports = function(deployer) {
  deployer.deploy(SafeMath);
};*/
module.exports = function(deployer) {
  deployer.deploy(ERC20);
};

/*module.exports = function(deployer) {
  deployer.deploy(IERC20);
};*/

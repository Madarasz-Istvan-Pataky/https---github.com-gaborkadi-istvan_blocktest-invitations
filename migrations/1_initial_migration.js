const Migrations = artifacts.require("./Migrations");
const Catmoon = artifacts.require("./Catmoon_Token.sol");
//const SafeMath = artifacts.require("./math/SafeMath.sol");
//const IERC20 = artifacts.require("./IERC20.sol");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
/*module.exports = function(deployer) {
  deployer.deploy(SafeMath);
};*/
module.exports = function(deployer) {
  deployer.deploy(Catmoon);
};

/*module.exports = function(deployer) {
  deployer.deploy(IERC20);
};*/

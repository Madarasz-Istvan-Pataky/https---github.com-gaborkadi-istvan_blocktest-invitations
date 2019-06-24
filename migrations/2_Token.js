var CatmoonToken = artifacts.require("./CatmoonToken.sol");
//var CatmoonTokenSale = artifacts.require("./CatmoonTokenSale.sol");
var ERC20 = artifacts.require("./ERC20.sol");

//const SafeMath = artifacts.require("./math/SafeMath.sol");
//const IERC20 = artifacts.require("./IERC20.sol");


module.exports = function(deployer){
deployer.deploy(CatmoonToken,'CatmoonToken','CTM','18');
//deployer.deploy(ERC20,500000000*10**18);
//deployer.deploy(CatmoonToken);

};
//var tokenPrice=500000000;
module.exports = function(deployer){
  deployer.deploy(ERC20,500000000);
  //deployer.deploy(ERC20,500000000).then(function(){
  //  return deployer.deploy(CatmoonTokenSale, CatmoonToken.address, tokenPrice);
  //});
};

/*
module.exports = function(deployer){
  deployer.deploy(ERC20,500000000);
};*/

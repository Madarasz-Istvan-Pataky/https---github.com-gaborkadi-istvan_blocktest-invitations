var CatmoonToken = artifacts.require("./CatmoonToken.sol");
//var CatmoonTokensale = artifacts.require("./CatmoonTokenSale.sol");

module export = function(deployer){
  deployer deploy("CatmoonToken","CTM",18);
}

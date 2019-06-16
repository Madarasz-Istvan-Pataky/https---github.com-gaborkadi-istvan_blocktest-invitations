var CatmoonTokenSale = artifacts.require("./CatmoonTokenSale.sol");

contract('CatmoonTokenSale', function(accounts){
  var tokenSaleInstance;

  it('Szerződés alapállapotának beállítása',function(){
    return CatmoonTokenSale.deployed().then(function(instance){
      tokenSaleInstance = instance;
      return tokenSaleInstance.address
    }).then(function(address){
      assert.notEqual(address,0x0,'a tulaj címe');
      return tokenSaleInstance.tokenContract();
    }).then(function(address){
      assert.notEqual(address,0x0,'a szerződés címe');
      return tokenSaleInstance.tokenContract();
  });
});
});

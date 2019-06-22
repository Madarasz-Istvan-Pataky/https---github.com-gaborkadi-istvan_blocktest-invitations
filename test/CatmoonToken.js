//const CatmoonToken = artifacts.require('./contracts/CatmoonToken.sol')
var CatmoonToken = artifacts.require('./CatmoonToken.sol')

contract('CatmoonToken', function(accounts)
{
var tokenInstance;
it('inicializálva a contract correkt értékekkel', function(){
  return CatmoonToken.deployed().then(function(instance){
    tokenInstance=instance;
    return tokenInstance.name();
  }).then(function(name){
    assert.equal(name,'CatmoonToken', 'helyes név megadás');
  });
});
})
/*
contract('CatmoonToken', () => {
    beforeEach(async () => {
    this.instance = await CatmoonToken.new('CatmoonToken', 'CTM', 18, 500000000,
    {from: account})
  })

it('has name', async () => {
    const name = await this.instance.name()
    assert.exists(name)
    assert.isAbove(name.length, 0)
  })

  it('has symbol', async () => {
    const symbol = await this.instance.symbol()
    assert.exists(symbol)
    assert.isAbove(symbol.length, 0)
  })

  it('has decimals', async () => {
    const decimals = await this.instance.decimals()
    decimals.toNumber().should.be.gt(1)
  })

  it('has total ammount', async () => {
    const totalSupply = await this.instance.totalSupply()
    totalSupply.toNumber().should.be.gt(0)
  })

  it('Szerződés alapállapotának beállítása',function(){
    return CatmoonToken.deployed().then(function(instance){
      tokenSaleInstance = instance;
      return tokenSaleInstance.address})})
    })
*/

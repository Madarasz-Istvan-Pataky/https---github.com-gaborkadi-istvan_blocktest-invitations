//const CatmoonToken = artifacts.require('./contracts/CatmoonToken.sol')
var CatmoonToken = artifacts.require('./CatmoonToken.sol')

contract('CatmoonToken', ([account]) => {
    beforeEach(async () => {
    this.instance = await CatmoonToken.new('CatmoonToken', 'CTM', '18', 500000000, {from:account})
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
    decimals.toNumber()
  })

  it('has total ammount', async () => {
    const totalSupply = await this.instance.totalSupply()
    totalSupply.toNumber()
  })

  it('account has tokens', async () => {
     const balance = await this.instance.balanceOf(account)
     balance.toNumber()
   })
});

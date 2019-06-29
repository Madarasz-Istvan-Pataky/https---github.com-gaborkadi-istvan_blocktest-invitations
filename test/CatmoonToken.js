//const CatmoonToken = artifacts.require('./contracts/CatmoonToken.sol')
const CatmoonToken = artifacts.require('./CatmoonToken.sol')
const BigNumber = require('../node_modules/big-number/big-number.js')
//const { expectThrow, expectEvent } = require('./helpers')
//const BigNumber = require("./big-number.js")

contract('CatmoonToken', ([account, secondAccount]) => {
    beforeEach(async () => {
      this.instance = await CatmoonToken.new('CatmoonToken', 'CTM', '18',500000000, {from:account})

  //  this.instance = await CatmoonToken.new('CatmoonToken', 'CTM', '18',new BigNumber(500000000*(10**18)), {from:account})
  })

it('has an owner', async () => {
  assert.equal(await this.instance.owner(),account, 'Van tulajdonosa')
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
   it('account has no tokens', async () => {
    const balance = await this.instance.balanceOf(secondAccount)
    balance.toNumber()
  })

   it('account with balance can transfer tokens', async () => {
       const pause = true;//await this.instance.paused()
       const balance = await this.instance.balanceOf(account)
       const balanceSecond = await this.instance.balanceOf(secondAccount)

       const { logs } = await this.instance.transfer(secondAccount, 1, {from: account})
       assert.web3Event(logs,{
  //     expectEvent(logs, 'Transfer', {
     event:'Transfer',
     args:{
         from: account,
         to: secondAccount,
         value: 1  }
        // pause: true
       })
     })
/*   it('call transfer', async () => {

})*/
});

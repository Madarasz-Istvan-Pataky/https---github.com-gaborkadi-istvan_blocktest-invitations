pragma solidity  >=0.4.21 <0.6.0;

import "./CatmoonToken.sol";

contract CatmoonTokenSale{
  address admin;
  CatmoonToken public tokenContract;
  uint256 public tokenPrice;
  mapping(address => uint256) public balanceOf;

  constructor (CatmoonToken _tokenContract, uint256 _tokenPrice ) public {
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
    }
/*
function() payable external{
  if (tokenContract.paused){
  uint256 amount = 5000*10**18;
  balanceOf[msg.sender] += amount;
  //transfer(msg.sender,amount);
}
}
*/
}

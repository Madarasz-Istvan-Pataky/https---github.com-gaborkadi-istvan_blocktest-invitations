pragma solidity  >=0.4.21 <0.6.0;

import "./CatmoonToken.sol";

contract CatmoonTokenSale{
  address admin;
  CatmoonToken public tokenContract;

  constructor (CatmoonToken _tokenContract) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
  }
}

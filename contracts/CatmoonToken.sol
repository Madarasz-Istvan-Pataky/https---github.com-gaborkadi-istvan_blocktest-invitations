pragma solidity  >=0.4.21 <0.6.0;
contract CatmoonToken is ERC20, ERC20Detailed{

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals
    )
        ERC20Detailed(name, symbol, decimals)
        ERC20()
        public
    {}
}

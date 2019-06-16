pragma solidity  >=0.4.21 <0.6.0;

import "./ERC20.sol";
import "./ERC20Detailed.sol";
import "./Roles/PauserRole.sol";

contract CatmoonToken is ERC20, ERC20Detailed{

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 totalSupply
    )
        ERC20Detailed(name, symbol, decimals)
        ERC20(totalSupply)

        public
    {  PauserRole;
             }
}

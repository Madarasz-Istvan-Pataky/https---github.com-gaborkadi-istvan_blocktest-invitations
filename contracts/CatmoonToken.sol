pragma solidity  >=0.4.21 <0.6.0;

import "./ERC20.sol";
import "./ERC20Detailed.sol";
import "./Roles/Pausable.sol";
import "./Roles/WhiteListedRole.sol";
import "./Ownable.sol";

contract CatmoonToken is ERC20, ERC20Detailed, Pausable, WhitelistedRole, Ownable{
//contract CatmoonToken is ERC20, Pausable, WhitelistedRole{

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

  //  mapping(address => uint256) public balanceOf;
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 totalSupply
    )

        ERC20(totalSupply)
        ERC20Detailed(name, symbol, decimals)
        Pausable()


        public
    {

             }
 /*
 function transfer(address recipient, uint256 amount) public returns (bool) {
                 _transfer(msg.sender, recipient, amount);
                 ERC20.transfer();
                 //override
                 //transfer nem hívható csak ha nem pause-beállítása
                 //transferfromra és approve-ra
                 //Ezután építhető be a whitelist
                 //Kiszórom a tokeneket, de nem tud a tulajdonosa kereskedni, csak később nyitom meg
             }
*/
}

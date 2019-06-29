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

 function transfer(address _recipient, uint256 _amount) public returns (bool) {
          if(paused()){
                 ERC20.transfer(_recipient, _amount);
                      }     //override
                 //transfer nem hívható csak ha nem pause-beállítása
                 //transferfromra és approve-ra
                 //Ezután építhető be a whitelist
                 //Kiszórom a tokeneket, de nem tud a tulajdonosa kereskedni, csak később nyitom meg
             }
function transferFrom(address _sender, address _recipient, uint256 _amount, bool _pause) public returns (bool) {
       if(_pause){
             ERC20.transferFrom(_sender, _recipient, _amount);
              }
            }

function approve(address _spender, uint256 _value, bool _pause) public returns (bool) {
  if(_pause){
        ERC20.approve(_spender, _value);
         }
              }

}

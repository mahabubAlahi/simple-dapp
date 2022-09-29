//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

contract ETH {
    address rootAdmin;

    constructor(){
        rootAdmin = msg.sender;
    }

    function sendEth(address _receiver, uint256 amount) external payable {
        require(msg.value >= amount, "ETH: Not enough eth to send");

        (bool sent, ) = _receiver.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
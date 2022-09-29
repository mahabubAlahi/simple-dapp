import React from 'react'
import finalweb3 from './web3'
import Eth from './artifacts/contracts/ETH.sol/ETH.json'
//import Address from './Address.json'

class Web3Container extends React.Component {
  state = { web3: null, accounts: null, contract: null };

  async componentDidMount () {
    try {
      const web3 = await finalweb3()
      const accounts = await web3.eth.getAccounts()
      const contract = new web3.eth.Contract(
        Eth.abi,
        "0x5FbDB2315678afecb367f032d93F642f64180aa3"
      )
      this.setState({ web3, accounts, contract })
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.log(error)
    }
  }

  render () {
    const { web3, accounts, contract } = this.state
    return web3 && accounts
      ? this.props.render({ web3, accounts, contract })
      : this.props.renderLoading()
  }
}

export default Web3Container;

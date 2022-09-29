import React from 'react'
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';

import Web3Container from '../lib/web3Container';

class Create extends React.Component {
    
    state = {
      depositValue: '',
      recipientAddress: '',
      errorMessage: '',
      loading: false
    };    
  
    onSubmit = async event => {
      event.preventDefault();
  
      this.setState({ loading: true, errorMessage: '' });
  
      try {
        const { contract, web3, accounts } = this.props

        await contract.methods
        .sendEth(this.state.recipientAddress, web3.utils.toWei(this.state.depositValue, 'ether'))
        .send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.depositValue, 'ether') 
        });
  
        Router.pushRoute('/');
      } catch (err) {
        this.setState({ errorMessage: err.message}); 
      }
  
      this.setState({ loading: false });
    };
  
    render() {
      return (
        <Layout>
          <h1>Send Ether</h1>
  
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field >
              <label>Ether Value</label>
              <Input
                label="ether"
                labelPosition="right"
                value={this.state.depositValue}
                onChange={event =>
                  this.setState({ depositValue: event.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Recipient Address</label>
              <Input
                value={this.state.recipientAddress}
                onChange={event =>
                  this.setState({ recipientAddress: event.target.value })}
              />
            </Form.Field>
  
            <Message error content={this.state.errorMessage} />
            <Button loading={this.state.loading} primary>
              Send!
            </Button>
          </Form>
        </Layout>
      );
    }
  }


  export default () => (
    <Web3Container
      renderLoading={() => <div className={styles.container}>
        Loading DApp page ...
      </div>}
      render={({ web3, accounts, contract }) => (
        <Create contract={contract} web3={web3} accounts={accounts} />
      )}
    />
  )
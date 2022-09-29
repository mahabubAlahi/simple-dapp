import React from 'react'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css';
import { Card, Dimmer, Loader, Image, Segment, Button, Grid } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from '../routes';

import Web3Container from '../lib/web3Container';


class Dapp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Layout>
          <Grid>
            <Grid.Row style={{ marginLeft: '70px'}}>
              <Grid.Column style={{ marginTop: '8%'}} width={11}>
                <h1 style={{ fontSize: '40px', marginBottom: '25px' }}>Easy Ether send or receive Services <br />using Ether Service</h1>
                <p style={{ fontSize: '20px', }}>With Ether Service you can send or receive services safely<br /> without the risk of chargebacks. Truly secure ether send or service.</p>
              </Grid.Column>
              <Grid.Column width={5} style={{ marginTop: '6%' }}>
                <Image src='/pay.png'  height={200} width={200} verticalAlign='middle'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div style={{ margin: '10% 0 0 35%' }}>
            <Link route="/send-ether">
              <a>
                <Button
                  content="Go To Ether Sending Portal"
                  size='massive'
                  primary
                />
              </a>
            </Link>
            {/*<Link route="/get-balance">
              <a>
                <Button
                  labelPosition='right'
                  content="Go To Balance Checking Portal"
                  icon="arrow right"
                  size='massive'
                  primary
                />
              </a>
    </Link>*/}
          </div>
        </Layout>
      </div>
    )
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div className={styles.container}>
      Loading DApp page ...
    </div>}
    render={({ web3, accounts, contract }) => (
      <Dapp contract={contract} web3={web3} accounts={accounts} />
    )}
  />
)

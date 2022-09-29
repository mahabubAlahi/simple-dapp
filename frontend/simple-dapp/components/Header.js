import React from 'react';
import { Menu, Image, Header, NavLink, route } from 'semantic-ui-react';
import { Link } from '../routes'


export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item position='left'>
                <Header as='h2'>
                    <Header.Content style={{ fontSize: '25px', letterSpacing: '2px' }}>
                        Ether Service
                        <Header.Subheader style={{ fontSize: '12px', textAlign: 'left', marginTop: '10px', letterSpacing: '1px' }}>Send & Receive </Header.Subheader>
                    </Header.Content>
                </Header>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Link route="/">
                    <a className="item">Home</a>
                </Link>
                <Link route="/send-ether">
                    <a className="item">Send Ether</a>
                </Link>
                {/*<Link route="/get-balance">
                    <a className="item">Get Balance</a>
    </Link>*/}
            </Menu.Menu>
        </Menu>
    )
}

import React from 'react';
import { useUser } from '../context/user';
import { Layout, Menu } from 'antd';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import styled from 'styled-components';
const { Header, Content } = Layout;
const LayoutComponent: React.FC = (props: any) => {

    const { user, dispatchUser, userAction } = useUser();
    return (
        <Layout>
            <Header style={{ height: '30px', position: 'fixed', zIndex: 1, width: '100%' }}>
                <HelloCmp>
                    {user.user && `${user.user.email}`}
                </HelloCmp>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '30px' }}
                >
                    <Menu.Item key="1"><Link to="/about">Mes teams</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/">Déconnexion</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 30px', marginTop: 30 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>{props.children}</div>
            </Content>
        </Layout>
    );
}

export default LayoutComponent;


const HelloCmp = styled.div`
width: 400px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  float: left;
  line-height: 30px;
  color: white;
  padding-left: 20px;
  text-align: center;
`;
import React from 'react';
import { useUser } from '../context/user';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const { Header, Content } = Layout;
const LayoutComponent: React.FC = (props: any) => {

    const { user } = useUser();
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
                    <Menu.Item key="1"><Link to="/">Mes teams</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0', marginTop: 30, width: "100vw", background: '#fff' }}>
                <div style={{ background: '#fff' }}>{props.children}</div>
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
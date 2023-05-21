import {Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import 'antd/dist/reset.css';
import { Layout, theme} from 'antd';
import React from 'react';
import './Style.css';
const { Header, Content, Footer, Sider } = Layout;


function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
    <div>
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className='height'
      >
        <div className="demo-logo-vertical" />
        <Navbar/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#001529'
          }} className="f1"
        >FORMULA 1</Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              height: '83vh',
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2023 
        </Footer>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;

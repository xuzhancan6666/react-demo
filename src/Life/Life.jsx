import React, { Component } from 'react';
import {Button, Layout} from 'antd';
import './Life.less';

const {Header, Content, Footer, Sider} = Layout;
class Life extends Component {
   constructor() {
      super();

      this.state = {
         times: 0
      };
   }

   render() {
    return <Layout className="life-layout">
       <Header className="life-header">Im header...</Header>
       <Layout className="life-body">
         <Sider>Im Sider...</Sider>
         <Content>Im Content...</Content>
       </Layout>
       <Footer className="life-footer">Im Footer...</Footer>
    </Layout>;
  }
}

export default Life;

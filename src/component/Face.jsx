import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Head from './header/Head';
import Foot from './footer/Foot';
import './Face.less';
import LeftMenu from './left-menu/LeftMenu';

class Face extends Component {
   constructor() {
      super();

      this.state = {
         times: 0
      }
   }

   render () {
      return <Row type="flex" className="whole-container">
         <Col span={4} className="left-menu"><LeftMenu/></Col>
         <Col span={20} className="right-content">
            <Head>header....</Head>
            <Row>content</Row>
            <Foot>footer</Foot>
         </Col>
      </Row>;
   }
}

export default Face;
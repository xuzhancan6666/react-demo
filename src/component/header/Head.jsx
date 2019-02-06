import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {dateFormatter} from '../util/util';
import webAPI from '../util/web-api/webAPI';
import './Head.less';
class Head extends Component {
   constructor() {
      super();

      this.defaultFormate = 'YYYY-MM-DD hh:mm:ss';
      this.state = {
      }
   }

   getWeather() {
      let opt = {
         url: 'http://api.map.baidu.com/telematics/v3/weather?location=%E6%B7%B1%E5%9C%B3&output=json&ak=YeUgraf0EUGbKxH9ciXpWf7hvGEkmXSw'
      }
      webAPI.jsonp(opt);
   }

   componentWillMount() {
      setInterval(() => {
         let date = new Date();

         this.setState({
            date: dateFormatter(date, this.defaultFormate)
         });
      }, 1000);
   }

   render() {
      return <div className="main-header">
         <Row className="row-1">
            <Col className="col-direction">kkk</Col>
         </Row>
         <Row className="row-2">
            <Col span={20} className="span-msg"><span>2</span></Col>
            <Col span={4} className="span-msg date"><span>{this.state.date}</span></Col>
         </Row>
      </div>;
   }
}

export default Head;
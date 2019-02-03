import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import './LeftMenu.less';

const {SubMenu, Item} = Menu;
class LeftMenu extends Component {
   constructor() {
      super();

      this.state = {
         menus: [],
         openKeys: null,
         selectedKeys: ['face']
      }
   }

   componentWillMount() {
      this.setState({
         menus: this.getMenu()
      });
   }

   getMenu = () => {
      let subMenus = [
         {
            id: 'face',
            title: '首页',
            icon: 'heart',
         },
         {
            id: 'sub-1',
            title: '黑猪金句',
            icon: 'heart',
            children: [
               {
                  id: 'c-1-1',
                  title: '喂',
                  icon: '',
               }, {
                  id: 'c-1-2',
                  title: '系边',
                  icon: '',
               }, {
                  id: 'c-1-3',
                  title: '过来啊',
                  icon: '',
               }
            ],
         }, {
            id: 'sub-2',
            title: '黑猪业务',
            icon: 'appstore',
            children: [
               {
                  id: 'c-2-1',
                  title: '澳门真人荷官在线拍牌',
                  icon: '',
               }, {
                  id: 'c-2-2',
                  title: '台湾美眉真人视频',
                  icon: '',
               }, {
                  id: 'c-2-3',
                  title: '美女真人麻将',
                  icon: '',
               }
            ],
         }, {
            id: 'sub-3',
            title: '黑猪成就',
            icon: 'setting',
            children: [
               {
                  id: 'c-3-1',
                  title: '5杀流浪从此无头',
                  icon: '',
               }, {
                  id: 'c-3-2',
                  title: '一刀流VN',
                  icon: '',
               }, {
                  id: 'c-3-3',
                  title: '送头流上单',
                  icon: '',
               }, {
                  id: 'c-3-4',
                  title: '备胎狂魔',
                  icon: '',
               }, {
                  id: 'c-3-5',
                  title: '追？',
                  icon: '',
               }
            ],
         }
      ];

      return subMenus;
   }

   buildMenu = (menu) => {
      let menuDom = menu.map((item) => {
         if(item['children'] != null && item['children'] != undefined) {
            return <SubMenu key = {item['id']} on
               title={<span>
                  <Icon type={item['icon']}/>
                  <span>{item['title']}</span>
               </span>}>
               {
                  this.buildMenu(item['children'])
               }
            </SubMenu>;
         }
         else{
            return <Item key = {item['id']}>
               <span>
                  <Icon type={item['icon']}/>
                  <span>{item['title']}</span>
               </span>
            </Item>;
         }
      });

      return menuDom;
   }

   onSelect = (key) => {
      this.setState({
         selectedKeys: [key]
      });
   }

   onOpenChange = (changeKeys) => {
      let {menus} = this.state;
      let key = changeKeys[1] || changeKeys[0];
      let defaultItemKey = '';

      menus.forEach((item) => {
         if(item['id'] == key) {
            let children = item['children'];

            defaultItemKey = children[0]['id'];
         }
      });

      this.setState({
         openKeys: [key],
         selectedKeys: [defaultItemKey]
      });
   }

   drawMenu = () => {
      let {menus, openKeys, selectedKeys} = this.state;

      return <Menu
         style={{ width: '100%' }}
         openKeys={openKeys}
         selectedKeys={selectedKeys}
         mode={'inline'}
         onSelect={({item, key}) => {
            this.onSelect(key);
         }}
         onOpenChange={item => this.onOpenChange(item)}
      >
      {
         this.buildMenu(menus)
      }
    </Menu>;
   }

   render() {
      return <div className="left-main-menu">
         <div className="menu-top">
            <div className="menu-icon"></div>
            <div className="menu-title"><span>91朱先生</span></div>
         </div>
         <div className="menu-content">
            {this.drawMenu()}
         </div>
      </div>
   }
}

export default LeftMenu;
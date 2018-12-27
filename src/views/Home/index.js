// 二级路由配置
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// 引入组件
import Tabbar from '../../componens/Tabbar/index'
import Films from './Films/index'
import Cinemas from './Cinemas/index'
import Shop from './Shop/index'
import My from './My/index'


import './index.less'

export default class Home extends Component {
  // 这里添加 home 组件的状态,并进行传参
  constructor(props){
    super(props)

    this.state = {
      myTabs: [
        {key: 'films', href: '/films', icon: 'icon-wodedianyingpiao', name: '电影'},
        {key: 'cinemas', href: '/cinemas', icon: 'icon-dianyingpiao', name: '影院'},
        {key: 'shop', href: '/shop', icon: 'icon-pintuan', name: '团购'},
        {key: 'my', href: '/my', icon: 'icon-shezhi', name: '我的'}
      ]
    }
  }
  render() {
    return (
      <div className="home">
        {/* 上面是可变的内容,同时只能匹配一个,使用 Switch */}
        <Switch>
          <Route path='/films' component={Films}></Route>
          <Route path='/cinemas' component={Cinemas}></Route>
          <Route path='/shop' component={Shop}></Route>
          <Route path='/my' component={My}></Route>
          <Redirect to='/films'></Redirect>
        </Switch>
        
        {/* 下面是固定tab_bar,从父级传this.state.myTabs参数下去,定义按钮个数 */}
        <Tabbar tabs={this.state.myTabs}></Tabbar>
      </div>
    )
  }
}

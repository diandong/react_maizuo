// 一级路由配置
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// 引入组件
import Home from './views/Home/index'
import City from './views/City/index'

//可以使用React.Component()
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 这里可以用<Fragment> 或者用 <Switch> */}
          <Route path='/city' component={ City }></Route>
          <Route path='/' component={ Home }></Route>
        </Switch>
      </Router>
    )
  }
}
export default App

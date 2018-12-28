import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// 用 prop-types 类库来验证 props 
import PropTypes from 'prop-types'

import './index.less'

class Tabbar extends Component {
  render() {
    // 从父级传入一个props下来
    let tabs = this.props.tabs
    return (
      <ul id="barMenu">
        {
          tabs.map(item => {
            return (
              <li className="XZ"
              key={item.key}>
              {/* 有跳转高亮(有class添加)的标签用NavLink */}
                <NavLink to={item.href}>
                  <i className={`iconfont ${item.icon}`}></i>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })
        } 
      </ul>
    )
  }
}

Tabbar.PropTypes = {
  tabs: PropTypes.array
}

export default Tabbar

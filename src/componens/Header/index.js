import React, { Component } from 'react'

import './index.less'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <i className="iconfont iconbox icon-arrow-right"></i>
        <span className="title">当前 - <b>深圳市</b></span>
        <i className="iconfont iconbox"></i>
      </div>
    )
  }
}

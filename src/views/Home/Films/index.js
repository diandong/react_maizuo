import React, { Component } from 'react'
import Banner from '../../../componens/Banner/index'

import './index.less'

export default class Films extends Component {
  constructor(props) {
    super(props)

    this.state ={}
    // 更改事件 this 指向
    this.goCityList = this.goCityList.bind(this)
  }
  // 编程式路由跳转
  goCityList() {
    this.props.history.push('/city')
  }

  render() {
    return (
      <div className="films">
        <div className="bannerBox">
          <div className="city-fixed" onClick={this.goCityList}>
            <span>深圳</span>
            <i></i>
          </div>
          <Banner></Banner>
        </div>
      </div>
    )
  }
}

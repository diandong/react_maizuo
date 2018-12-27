// Tabbar组件
import React from 'react'

import './index.less'

class Tabbar extends React.Component{
  render(){
    return (
      <ul className="tabbar">
      {/* 这边接送父级传来的数据 */}
        {
          this.props.tabs.map(item => {
            return (
              <li key={ item.id }
              // 如果需要加入多个类名需要给className{[]}添加一个数组参数,
              // join() 方法用于把数组中的所有元素转换一个字符串。元素是通过指定的分隔符进行分隔的。
              // 这里有需要切换,要加点击事件但是本身没有能力来改变参数,参数是父级传递过来的,需要在父级中添加事件函数,
              className={ ['item', this.props.curTab === item.id ? 'z-act' : ''].join(' ')}
              onClick={ (e) => {this.props.onChange(item.id)}}
              >{ item.name }</li>
            )
          })
        }
      </ul>
    )
  }
}
export default Tabbar
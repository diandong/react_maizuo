import React from 'react'
import './index.less'

class FilmList extends React.Component {
  render() {
    return (
      <div className="film-list-content">
        <ul>
          <li>
            <div className="img">
              <img src="./images/film-1.jpg" alt="" />
            </div>
            <div className="info">
              <div>
                <span className="name">海王</span>
                <span className="type">3D</span>
              </div>
              <div>
                <span className="label">观众评分</span>
                <span className="grade">7</span>
              </div>
              <div>
                <span className="label">主演： 帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</span>
              </div>
              <div>
                <span className="label">美国 澳大利亚 | 143分钟</span>
              </div>
            </div>
            <div className="buy">购票</div>
          </li>
        </ul>
      </div>
    )
  }
}
export default FilmList
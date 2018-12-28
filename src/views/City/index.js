import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'

import Header from '../../componens/Header/index'

import './index.less'

export default class City extends Component {
  render() {
    return (
      <div className="city">
        <Header></Header>

        <SearchBar placeholder="北京 | bj" maxLength={8}></SearchBar>

        <div className="lv-indexlist">
          <ul className="lv-indexlist__content">
              <li className="lv-indexsection">
                <p className="lv-indexsection__index">A</p>
                <ul>
                  <li>鞍山</li>
                  <li>安庆</li>
                  <li>安阳</li>
                  <li>安顺</li>
                  <li>安康</li>
                </ul>
              </li>
              <li className="lv-indexsection">
                <p className="lv-indexsection__index">B</p>
                <ul>
                  <li>鞍山</li>
                  <li>安庆</li>
                  <li>安阳</li>
                  <li>安顺</li>
                  <li>安康</li>
                </ul>
              </li>
              <li className="lv-indexsection">
                <p className="lv-indexsection__index">C</p>
                <ul>
                  <li>鞍山</li>
                  <li>安庆</li>
                  <li>安阳</li>
                  <li>安顺</li>
                  <li>安康</li>
                </ul>
              </li>
              <li className="lv-indexsection">
                <p className="lv-indexsection__index">D</p>
                <ul>
                  <li>鞍山</li>
                  <li>安庆</li>
                  <li>安阳</li>
                  <li>安顺</li>
                  <li>安康</li>
                </ul>
              </li>
              <li className="lv-indexsection">
                <p className="lv-indexsection__index">E</p>
                <ul>
                  <li>鞍山</li>
                  <li>安庆</li>
                  <li>安阳</li>
                  <li>安顺</li>
                  <li>安康</li>
                  <li>安康</li>
                  <li>安康</li>
                  <li>安康</li>
                  <li>安康</li>
                  <li>安康</li>
                  <li>安康</li>
                </ul>
              </li>
          </ul>
          <div className="lv-indexlist__nav">
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

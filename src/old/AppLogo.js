/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import img_elLetCaplogoinvertedrgb from './images/AppLogo_elLetCaplogoinvertedrgb_787838.png';

export default class AppLogo extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const style_elLetCaplogoinvertedrgb = {
      height: 'auto',
     };
    
    return (
      <div className="AppLogo">
        <div className="foreground">
          <img className="elLetCaplogoinvertedrgb" style={style_elLetCaplogoinvertedrgb} src={img_elLetCaplogoinvertedrgb} alt=""  />
        </div>
      </div>
    )
  }
  
}

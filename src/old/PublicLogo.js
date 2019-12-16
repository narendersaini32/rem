/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import img_elLetCaplogoinvertedrgb from './images/PublicLogo_elLetCaplogoinvertedrgb_58266.png';

export default class PublicLogo extends Component {

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
      <div className="PublicLogo">
        <div className="foreground">
          <img className="elLetCaplogoinvertedrgb" style={style_elLetCaplogoinvertedrgb} src={img_elLetCaplogoinvertedrgb} alt=""  />
        </div>
      </div>
    )
  }
  
}

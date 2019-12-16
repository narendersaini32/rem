/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import img_elLetCapbgbig from './images/PublicBackgroundPicture_elLetCapbgbig_621039.jpg';

export default class PublicBackgroundPicture extends Component {

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
    const style_elLetCapbgbig = {
      height: 'auto',
     };
    
    return (
      <div className="PublicBackgroundPicture">
        <div className="background">
          <img className="elLetCapbgbig" style={style_elLetCapbgbig} src={img_elLetCapbgbig} alt=""  />
        </div>
        
      </div>
    )
  }
  
}

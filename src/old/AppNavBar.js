/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import AppMenu from './AppMenu';
import btn_icon_692948 from './images/btn_icon_692948.png';

export default class AppNavBar extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      elPublicMenu_visible: false,
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

  onClick_elButtonPublicMenu = (ev) => {
    this.setState({elPublicMenu_visible: !this.state.elPublicMenu_visible});
  
  }
  
  
  render() {
    const elPublicMenu = this.state.elPublicMenu_visible ? (
      <div className="hasNestedComps elPublicMenu">
        <AppMenu ref={(el)=> this._elPublicMenu = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
      </div>
     ) : null;
    const style_elButtonPublicMenu = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_692948+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppNavBar">
        <div className="foreground">
          { elPublicMenu }
          <button className="actionFont elButtonPublicMenu" style={style_elButtonPublicMenu} onClick={this.onClick_elButtonPublicMenu}  />
        </div>
      </div>
    )
  }
  
}

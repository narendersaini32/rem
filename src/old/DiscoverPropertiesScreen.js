/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import AppTopBar from './AppTopBar';
import AppNavBar from './AppNavBar';
import AppLogo from './AppLogo';

export default class DiscoverPropertiesScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elCard = {
      width: '100%',
      height: '100%',
     };
    const style_elCard_outer = {
      backgroundColor: '#fefffe',
      boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    
    return (
      <div className="AppScreen DiscoverPropertiesScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elCard" style={style_elCard_outer}>
            <div className="appBg" style={style_elCard} />
          </div>
          
          <div className="hasNestedComps elAppTopBar">
            <AppTopBar ref={(el)=> this._elAppTopBar = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elAppNavBar">
              <AppNavBar ref={(el)=> this._elAppNavBar = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="hasNestedComps elAppLogo">
              <AppLogo ref={(el)=> this._elAppLogo = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

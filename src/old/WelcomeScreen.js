/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import PublicBackgroundPicture from './PublicBackgroundPicture';
import PublicNavBar from './PublicNavBar';
import PublicLogo from './PublicLogo';

export default class WelcomeScreen extends Component {

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
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'black',
     };
    const style_elTextHeader = {
      fontSize: 26.6,
      color: '#f6f6f6',
      textAlign: 'left',
     };
    const style_elTextInfo = {
      color: '#f6f6f6',
      textAlign: 'left',
     };
    const style_elTextContact = {
      color: '#f6f6f6',
      textAlign: 'left',
     };
    const style_elHotspot_makeContact = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
     };
    
    return (
      <div className="AppScreen WelcomeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
          
          <div className="hasNestedComps containerMinHeight elPublicBackgroundPicture">
            <PublicBackgroundPicture ref={(el)=> this._elPublicBackgroundPicture = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_WelcomeScreen_elPublicNavBar_569291">
          <div className="hasNestedComps elPublicNavBar">
            <div>
              <PublicNavBar ref={(el)=> this._elPublicNavBar = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          </div>
          <div className="elTextHeader">
            <div className="font-robotoRegular" style={style_elTextHeader}>
              <div>{this.props.locStrings.welcome_textHeader_741660}</div>
            </div>
          </div>
          
          <div className="elTextInfo">
            <div className="actionFont" style={style_elTextInfo}>
              <div>{this.props.locStrings.welcome_textInfo_34133}</div>
            </div>
          </div>
          
          <div className="elTextContact">
            <div className="actionFont" style={style_elTextContact}>
              <div>{this.props.locStrings.welcome_textContact_161457}</div>
            </div>
          </div>
          
          <div className="elHotspot_makeContact">
            <div className="actionFont" style={style_elHotspot_makeContact} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elPublicLogo">
              <PublicLogo ref={(el)=> this._elPublicLogo = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

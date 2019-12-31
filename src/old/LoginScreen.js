/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import btn_icon_15699 from './images/btn_icon_15699.png';
import btn_icon_126833 from './images/btn_icon_126833.png';

export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      fieldUserName: '',
      fieldPassWord: '',
      fieldUserName: '',
      fieldPassWord: '',
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

  // --- Functions for component state index 0 (1 of 3) --- 
  
  textInputChanged_fieldUserName = (event) => {
    this.setState({fieldUserName: event.target.value});
  }
  
  textInputChanged_fieldPassWord = (event) => {
    this.setState({fieldPassWord: event.target.value});
  }
  
  onClick_state0_elButtonContinue15699 = (ev) => {
    let newVal = this.state.fieldUserName;
    this.props.appActions.updateDataSlot('ds_loggedInAsUserName', newVal);
  
    newVal = "1";
    this.props.appActions.updateDataSlot('ds_loginScreenState', newVal);
  
    // 'Unlock gate' action.
    this.sendLogin();
  
  }
  
  
  onClick_state0_elButtonCancel126833 = (ev) => {
    this.props.appActions.updateDataSlot('ds_loggedInAsUserName', "");
  
    let newVal = "0";
    this.props.appActions.updateDataSlot('(null)', newVal);
  
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
  }
  
  
  sendLogin = () => {
    // This implements the 'simple password' unlock from React Studio.
    // For prototyping only -- you don't want to use this in production code because the password is readable here!
    // To implement a real login, use a web service plugin instead of the 'simple password' setting.
    const pass = this.state.fieldPassWord || '';
    if (pass === "WelcomeToLetCap") {
       this.finishLogin();
    } else {
      const err = 'Incorrect password.';
  
    }
  }
  
  finishLogin = () => {
      this.props.appActions.goToScreen('discoverproperties');
  }
  
  renderState0() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elCard207090 = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elCard207090_outer = {
      backgroundColor: '#e6e6e5',
      borderRadius: '10.0px',
      boxShadow: '0.0px 3.0px 48px #f94d08',
     };
    const style_state0_elFieldUserName1006441 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_state0_elFieldPassWord897128 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_state0_elButtonContinue15699 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_15699+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '131.250%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elButtonCancel126833 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_126833+')',
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
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="state0_elCard207090" style={style_state0_elCard207090_outer}>
            <div className="cardBg" style={style_state0_elCard207090} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="state0_elFieldUserName1006441">
            <input className="baseFont" style={style_state0_elFieldUserName1006441} type="text" placeholder={this.props.locStrings.login_fieldUserName_630109} onChange={this.textInputChanged_fieldUserName} value={this.state.fieldUserName}  />
          </div>
          
          <div className="state0_elFieldPassWord897128">
            <input className="baseFont" style={style_state0_elFieldPassWord897128} type="password" placeholder={this.props.locStrings.login_fieldPassword_897128} onChange={this.textInputChanged_fieldPassWord} value={this.state.fieldPassWord}  />
          </div>
          
          <div className="flowRow flowRow_LoginScreen_state0_elButtonContinue15699_15699">
          <div className="state0_elButtonContinue15699">
            <button className="actionFont" style={style_state0_elButtonContinue15699} onClick={this.onClick_state0_elButtonContinue15699}  />
          </div>
          
          <div className="state0_elButtonCancel126833">
            <button className="actionFont" style={style_state0_elButtonCancel126833} onClick={this.onClick_state0_elButtonCancel126833}  />
          </div>
          
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 3) --- 
  
  textInputChanged_fieldUserName = (event) => {
    this.setState({fieldUserName: event.target.value});
  }
  
  textInputChanged_fieldPassWord = (event) => {
    this.setState({fieldPassWord: event.target.value});
  }
  
  onClick_state1_elButtonContinue15699 = (ev) => {
    let newVal = this.state.fieldUserName;
    this.props.appActions.updateDataSlot('ds_loggedInAsUserName', newVal);
  
    newVal = "1";
    this.props.appActions.updateDataSlot('ds_loginScreenState', newVal);
  
    // 'Unlock gate' action.
    this.sendLogin();
  
  }
  
  
  onClick_state1_elButtonCancel126833 = (ev) => {
    this.props.appActions.updateDataSlot('ds_loggedInAsUserName', "");
  
    let newVal = "0";
    this.props.appActions.updateDataSlot('(null)', newVal);
  
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
  }
  
  
  sendLogin = () => {
    // This implements the 'simple password' unlock from React Studio.
    // For prototyping only -- you don't want to use this in production code because the password is readable here!
    // To implement a real login, use a web service plugin instead of the 'simple password' setting.
    const pass = this.state.fieldPassWord || '';
    if (pass === "WelcomeToLetCap") {
       this.finishLogin();
    } else {
      const err = 'Incorrect password.';
  
    }
  }
  
  finishLogin = () => {
    window.location.href="/search"
      // this.props.appActions.goToScreen('discoverproperties');
  }
  
  renderState1() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state1_elCard207090 = {
      width: '100%',
      height: '100%',
     };
    const style_state1_elCard207090_outer = {
      backgroundColor: '#e6e6e5',
      borderRadius: '10.0px',
      boxShadow: '0.0px 3.0px 48px #f94d08',
     };
    const style_state1_elFieldUserName1006441 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_state1_elFieldPassWord897128 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_state1_elButtonContinue15699 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_15699+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '131.250%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state1_elButtonCancel126833 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_126833+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state1_elLoginErorrText = {
      color: 'black',
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="state1_elCard207090" style={style_state1_elCard207090_outer}>
            <div className="cardBg" style={style_state1_elCard207090} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="state1_elFieldUserName1006441">
            <input className="baseFont" style={style_state1_elFieldUserName1006441} type="text" placeholder={this.props.locStrings.login_fieldUserName_630109} onChange={this.textInputChanged_fieldUserName} value={this.state.fieldUserName}  />
          </div>
          
          <div className="state1_elFieldPassWord897128">
            <input className="baseFont" style={style_state1_elFieldPassWord897128} type="password" placeholder={this.props.locStrings.login_fieldPassword_897128} onChange={this.textInputChanged_fieldPassWord} value={this.state.fieldPassWord}  />
          </div>
          
          <div className="flowRow flowRow_LoginScreen_state1_elButtonContinue15699_15699">
          <div className="state1_elButtonContinue15699">
            <button className="actionFont" style={style_state1_elButtonContinue15699} onClick={this.onClick_state1_elButtonContinue15699}  />
          </div>
          
          <div className="state1_elButtonCancel126833">
            <button className="actionFont" style={style_state1_elButtonCancel126833} onClick={this.onClick_state1_elButtonCancel126833}  />
          </div>
          
          </div>
          <div className="state1_elLoginErorrText">
            <div className="baseFont" style={style_state1_elLoginErorrText}>
              <div>{this.props.locStrings.login_text_211827}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 3) --- 
  
  renderState2() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.props.ds_loginScreenState !== undefined) ? this.props.ds_loginScreenState : 0, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
      case 2:
        return this.renderState2();
    }
  }
  
}

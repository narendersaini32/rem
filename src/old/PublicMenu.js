/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import btn_icon_116750 from './images/btn_icon_116750.png';
import btn_icon_720179 from './images/btn_icon_720179.png';
import btn_icon_669360 from './images/btn_icon_669360.png';
import btn_icon_895965 from './images/btn_icon_895965.png';

export default class PublicMenu extends Component {

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

  onClick_elButtonLanguage = (ev) => {
     if (this.props.appActions.dataSlots['ds_activeLang'] === "en") {
          this.props.appActions.updateDataSlot('ds_activeLang',"sv");
        	}
        else {
          this.props.appActions.updateDataSlot('ds_activeLang',"en");
        	}
  
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  onClick_elButtonLogIn = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_loginScreenState', newVal);
  
    // Go to screen 'Login'
    this.props.appActions.goToScreen('login', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    const style_elButtonLetcapInfo = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_116750+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elButtonLanguage = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_720179+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elButtonLetCapChat = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_669360+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '117.500%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elButtonLogIn = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_895965+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '121.250%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="PublicMenu">
        <div className="layoutFlow">
          <div className="elButtonLetcapInfo">
            <button className="actionFont" style={style_elButtonLetcapInfo} />
          </div>
          
          <div className="elButtonLanguage">
            <button className="actionFont" style={style_elButtonLanguage} onClick={this.onClick_elButtonLanguage}  />
          </div>
          
          <div className="elButtonLetCapChat">
            <button className="actionFont" style={style_elButtonLetCapChat} />
          </div>
          
          <div className="elButtonLogIn">
            <button className="actionFont" style={style_elButtonLogIn} onClick={this.onClick_elButtonLogIn}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}

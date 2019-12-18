/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import btn_icon_57268 from './images/btn_icon_57268.png';
import btn_icon_154309 from './images/btn_icon_154309.png';
import btn_icon_75209 from './images/btn_icon_75209.png';
import btn_icon_178883 from './images/btn_icon_178883.png';
import btn_icon_53629 from './images/btn_icon_53629.png';

export default class AppMenu extends Component {

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
    let newVal = "";
    this.props.appActions.updateDataSlot('ds_loggedInAsUserName', newVal);
  
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    const style_elButtonLetcapInfo = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_57268+')',
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
      backgroundImage: 'url('+btn_icon_154309+')',
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
      backgroundImage: 'url('+btn_icon_75209+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '117.500%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_178883+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '110.000%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elButtonLogIn = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_53629+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '122.500%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppMenu">
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
          
          <div className="elButton">
            <button className="actionFont" style={style_elButton} />
          </div>
          
          <div className="elButtonLogIn">
            <button className="actionFont" style={style_elButtonLogIn} onClick={this.onClick_elButtonLogIn}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}

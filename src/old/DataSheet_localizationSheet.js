/* eslint-disable */

import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textHeader_741660";
    item['en'] = "This is your premium source of real estate information.";
    item['sv'] = "Digital fastighetsinformation för värdering och försäljning.";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textContact_161457";
    item['en'] = "Do you want us to get in touch? Please fill in the contact form and we will get back to you !";
    item['sv'] = "Vill du att vi kontaktar dig? Fyll i kontaktformuläret så bokar vi in ett personligt möte för att berätta mer.";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textInfo_34133";
    item['en'] = "LetCap gives you access to essential information regarding rental housing properties and commercial real estates in Sweden. Stay tuned…";
    item['sv'] = "LetCap ger dig tillgång till värdefull grundinformation om bostadsfastigheter och kommersiella fastigheter i Sverige. Systemet lanseras inom kort.";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_fieldUserName_630109";
    item['en'] = "UserName";
    item['sv'] = "AnvändarID";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_fieldPassword_897128";
    item['en'] = "Password";
    item['sv'] = "Lösenord";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_211827";
    item['en'] = "Either user name or password was incorrect";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_field_478984";
    item['en'] = "Search anything";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_button_966669";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_button_491715";
    item['en'] = "Advanced Search";
    
    item = {};
    this.items.push(item);
    item['key'] = "appmenu_button_178883";
    item['en'] = "New button";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}

/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Input from 'muicss/lib/react/input';
import btn_icon_966669 from './images/btn_icon_966669.png';

// UI framework component imports

export default class Search extends Component {
  // This component doesn't use any properties

  constructor(props) {
    super(props);

    this.state = {
      searchAnythingField: '',
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

  textInputChanged_searchAnythingField = (event) => {
    this.setState({ searchAnythingField: event.target.value });
  }

  render() {
    const style_elSearchButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: `url(${btn_icon_966669})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
    };
    const style_elSearchAnythingField = {
      display: 'block',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      pointerEvents: 'auto',
    };

    const style_elAdvancedSearchButton = {
      display: 'block',
      textTransform: 'uppercase',
      color: '#002a49',
      textAlign: 'left',
      backgroundColor: 'transparent',
    };

    return (
      <div className="Search">
        <div className="layoutFlow">
          <div className="elSearchButton">
            <button className="actionFont" style={style_elSearchButton} />
          </div>

          <div className="elSearchAnythingField">
            <Input className="actionFont" style={style_elSearchAnythingField} type="text" hint={this.props.locStrings.component1_field_478984} onChange={this.textInputChanged_searchAnythingField} value={this.state.searchAnythingField} />
          </div>

          <div className="elAdvancedSearchButton">
            <button className="headlineFont" style={style_elAdvancedSearchButton}>
              {this.props.locStrings.component1_button_491715}
            </button>
          </div>
        </div>

      </div>
    );
  }
}

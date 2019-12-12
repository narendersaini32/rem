import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

import { CloseSvg } from '../../images';
import { Input } from './input';
import { TEXT } from '../../local/text';
import 'react-input-range/lib/css/index.css';

const {
  POSTAL_CODE, PROPERTY_ID, PROPERTY_NAME,
  STREET_ADRESS, CITY, ARTAL, SEARCH, ADRESS_FIELDS, ADVANCED_SEARCH,
} = TEXT;
export class AdvancedSearch extends Component {
    state = { year: { min: 1989, max: 2008 } }

    render() {
      const { closeAdvancedSearch } = this.props;
      const { year } = this.state;
      return (
        <div
          className="advanced-search"
        >
          <div className="text-wrapper">
            <div className="advanced">{ADVANCED_SEARCH}</div>
            <div
              className="close-icon"
              style={{ backgroundImage: `url(${CloseSvg})` }}
              onClick={closeAdvancedSearch}
            />
          </div>

          <div className="input-container">
            <Input
              placeholder={PROPERTY_ID}
            />
            <Input
              placeholder={PROPERTY_NAME}
            />
          </div>
          <div className="address-field">
            {ADRESS_FIELDS}
          </div>
          <div className="input-container">
            <Input
              placeholder={STREET_ADRESS}
            />
            <Input
              placeholder={POSTAL_CODE}
            />
          </div>
          <div className="input-container">
            <Input
              placeholder="District name"
            />
            <Input
              placeholder={CITY}
            />
          </div>
          <div className="input-container">
            <div className="year-slider">
              <div>
                {ARTAL}
              </div>
              <InputRange
                maxValue={new Date().getFullYear()}
                minValue={1965}
                value={year}
                onChange={(value) => this.setState({ year: value })}
              />
            </div>
            <button>{SEARCH}</button>
          </div>
        </div>
      );
    }
}

AdvancedSearch.propTypes = {
  closeAdvancedSearch: PropTypes.func.isRequired,
};

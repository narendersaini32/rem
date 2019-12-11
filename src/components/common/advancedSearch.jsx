import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

import { CloseSvg } from '../../images';
import { Input } from './input';
import 'react-input-range/lib/css/index.css';

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
            <div className="advanced">ADVANCED SEARCH</div>
            <div
              className="close-icon"
              style={{ backgroundImage: `url(${CloseSvg})` }}
              onClick={closeAdvancedSearch}
            />
          </div>

          <div className="input-container">
            <Input
              placeholder="PropertyID"
            />
            <Input
              placeholder="Property Name"
            />
          </div>
          <div className="address-field">
              Adress Fields
          </div>
          <div className="input-container">
            <Input
              placeholder="Street Adress"
            />
            <Input
              placeholder="Postal Code"
            />
          </div>
          <div className="input-container">
            <Input
              placeholder="District name"
            />
            <Input
              placeholder="City"
            />
          </div>
          <div className="input-container">
            <div className="year-slider">
              <div>
              Årtal
              </div>
              <InputRange
                maxValue={new Date().getFullYear()}
                minValue={1965}
                value={year}
                onChange={(value) => this.setState({ year: value })}
              />
            </div>
            <button>SEARCH</button>
          </div>
        </div>
      );
    }
}

AdvancedSearch.propTypes = {
  closeAdvancedSearch: PropTypes.func.isRequired,
};

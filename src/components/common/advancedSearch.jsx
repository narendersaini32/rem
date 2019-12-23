import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import { pickBy, identity } from 'lodash';

import { CloseSvg } from '../../images';
import { Input } from './input';
import { TEXT } from '../../local/text';
import 'react-input-range/lib/css/index.css';

const {
  POSTAL_CODE, PROPERTY_ID, PROPERTY_NAME,
  STREET_ADRESS, CITY, ARTAL, SEARCH, ADRESS_FIELDS, ADVANCED_SEARCH, DISTRICT_NAME,
} = TEXT;

export class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { year: { min: 1989, max: 2008 } };
    this.id = React.createRef();
    this.name = React.createRef();
    this.street = React.createRef();
    this.code = React.createRef();
    this.district = React.createRef();
    this.city = React.createRef();
  }

  search = (e) => {
    e.preventDefault();
    const {
      street: { current: { value: street } },
      city: { current: { value: city } },
      district: { current: { value: district } },
      name: { current: { value: name } },
      id: { current: { value: id } },
      code: { current: { value: code } },
    } = this;
    // const { year: { min: yearFrom, max: yearTo } } = this.state;
    const data = {
      street, id, district, name, code, city,
    };
    const { getProperties, closeAdvancedSearch } = this.props;
    getProperties(pickBy(data, identity));
    closeAdvancedSearch();
  }

  render() {
    const { closeAdvancedSearch } = this.props;
    const { year } = this.state;
    return (
      <form
        className="advanced-search"
        onSubmit={this.search}
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
            inputProps={{
              placeholder: PROPERTY_ID,
              ref: this.id,
            }}
          />
          <Input
            inputProps={{
              placeholder: PROPERTY_NAME,
              ref: this.name,
              minLength: 3,
            }}
          />
        </div>
        <div className="address-field">
          {ADRESS_FIELDS}
        </div>
        <div className="input-container">
          <Input
            inputProps={{
              placeholder: STREET_ADRESS,
              ref: this.street,
            }}
          />
          <Input
            inputProps={{
              placeholder: POSTAL_CODE,
              ref: this.code,
              type: 'number',
            }}
          />
        </div>
        <div className="input-container">
          <Input
            inputProps={{
              placeholder: DISTRICT_NAME,
              ref: this.district,
            }}
          />
          <Input
            inputProps={{
              placeholder: CITY,
              ref: this.city,
            }}
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
          <button
            type="submit"
          >
            {SEARCH}

          </button>
        </div>
      </form>
    );
  }
}

AdvancedSearch.propTypes = {
  closeAdvancedSearch: PropTypes.func.isRequired,
  getProperties: PropTypes.func.isRequired,
};

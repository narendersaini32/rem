import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchSvg, LoadingSvg } from '../../images';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  handleSearch = () => {
    const { current: { value } } = this.searchInput;
    if (value) {
      const { getProperties } = this.props;
      const county = 'LOMMA';
      const data = { name: value, county };
      getProperties(data);
    }
  }

  render() {
    const { loading, toggleAdvancedSearch } = this.props;
    return (
      <div className="search-bar">
        <div
          className="search"
          style={{ backgroundImage: `url(${loading ? LoadingSvg : SearchSvg})` }}
          onClick={this.handleSearch}
        />
        <input
          placeholder="SEARCH ANYTHING"
          ref={this.searchInput}
          onKeyPress={({ key }) => { if (key === 'Enter') this.handleSearch(); }}
        />
        <div
          className="advanced"
          onClick={toggleAdvancedSearch}
        >
            ADVANCED SEARCH
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getProperties: PropTypes.func.isRequired,
  toggleAdvancedSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

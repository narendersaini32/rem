import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Logo } from './logo';
import { Menu } from './menu';
import { SearchBar } from './searchBar';
import { AdvancedSearch } from './advancedSearch';

export class Header extends Component {
    state={ advanced: false }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOut);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOut);
    }

      setWrapperRef = (node) => {
        this.show = node;
      }

      handleClickOut = (event) => {
        if (this.show && !this.show.contains(event.target)) {
          this.closeAdvancedSearch();
        }
      }

    toggleAdvancedSearch = () => { this.setState(({ advanced }) => ({ advanced: !advanced })); }

    closeAdvancedSearch =() => { this.setState({ advanced: false }); }

    render() {
      const { getProperties, loading } = this.props;
      const { advanced } = this.state;
      return (
        <div
          className="header"
          ref={this.setWrapperRef}
        >
          <Logo />
          <SearchBar
            getProperties={getProperties}
            loading={loading}
            toggleAdvancedSearch={this.toggleAdvancedSearch}
          />
          {advanced && (
          <AdvancedSearch
            closeAdvancedSearch={this.closeAdvancedSearch}
          />
          )}
          <Menu />
        </div>
      );
    }
}

Header.propTypes = {
  getProperties: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

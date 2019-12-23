import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Logo } from './logo';
import { Menu } from './menu';
import { SearchBar } from './searchBar';
import { AdvancedSearch } from './advancedSearch';
import { search } from '../../modal';

export class Header extends Component {
  state = { advanced: false }

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

  closeAdvancedSearch = () => { this.setState({ advanced: false }); }

  getProperties = (data) => {
    const { updateState } = this.props;
    // eslint-disable-next-line no-param-reassign
    data.county = 'LOMMA'; // will be dynamic in future
    updateState({ loading: true });
    search(data, ({ result: coordsList }) => {
      const state = { loading: false, sidebar: true, coordsList: [] };
      if (coordsList) {
        state.coordsList = coordsList;
      }
      updateState(state);
    });
  }

  render() {
    const { loading } = this.props;
    const { advanced } = this.state;
    return (
      <div
        className="header"
        ref={this.setWrapperRef}
      >
        <Logo />
        <SearchBar
          getProperties={this.getProperties}
          loading={loading}
          toggleAdvancedSearch={this.toggleAdvancedSearch}
        />
        {advanced && (
          <AdvancedSearch
            getProperties={this.getProperties}
            closeAdvancedSearch={this.closeAdvancedSearch}
          />
        )}
        <Menu />
      </div>
    );
  }
}

Header.propTypes = {
  updateState: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PropertyCard } from './propertyCard';
import { SearchSvg, ArrowSvg } from '../../images';

export class Sidebar extends Component {
    state={ };

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
        const { closeSidebar } = this.props;
        closeSidebar();
      }
    }


    render() {
      const { coordsList, open, toggleSideBar } = this.props;
      return (
        <>
          <div
            className={`handle ${open ? '' : 'close-handle'}`}
            onClick={toggleSideBar}
          >
            <div
              className="search-icon"
              style={{ backgroundImage: `url(${SearchSvg})` }}
            />
            <div
              className={`arrow-icon ${open ? '' : 'rotate-arrow'}`}
              style={{ backgroundImage: `url(${ArrowSvg})` }}
            />
          </div>
          <div
            className={`sidebar ${open ? '' : 'close-sidebar'}`}
            ref={this.setWrapperRef}
          >
            <div className="search-result">
              {coordsList.length ? 'SEARCH RESULT' : 'No Result'}
            </div>
            <div className="property-containers">
              {coordsList.map((obj) => <PropertyCard {...obj} />)}
            </div>
          </div>
        </>
      );
    }
}

Sidebar.propTypes = {
  coordsList: PropTypes.arrayOf(Object).isRequired,
  toggleSideBar: PropTypes.arrayOf(Object).isRequired,
  closeSidebar: PropTypes.arrayOf(Object).isRequired,
  open: PropTypes.bool.isRequired,
};

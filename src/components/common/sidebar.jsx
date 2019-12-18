import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { PropertyCard } from './propertyCard';
import { SearchSvg, ArrowSvg } from '../../images';
import { TEXT } from '../../local/text';

const { NO_RESULT, SEARCH_RESULT } = TEXT;

export class Sidebar extends Component {
  state = {};

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
            {coordsList.length ? SEARCH_RESULT : NO_RESULT }
          </div>


          <div className="property-containers">
            <AutoSizer>
              {({ height, width }) => (
                <List
                  itemCount={coordsList.length}
                  height={height}
                  width={width}
                  itemSize={100}
                >
                  {({ index, style }) => <PropertyCard style={style} {...coordsList[index]} />}
                </List>
              )}
            </AutoSizer>

          </div>
        </div>
      </>
    );
  }
}

Sidebar.propTypes = {
  coordsList: PropTypes.arrayOf(Object).isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

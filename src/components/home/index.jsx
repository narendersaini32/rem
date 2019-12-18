import React, { Component } from 'react';

import {
  OpenMap, Header, Sidebar,
} from '../common';

export class Home extends Component {
    state={ coordsList: [], sidebar: false, loading: false };

    toggleSideBar = () => { this.setState(({ sidebar }) => ({ sidebar: !sidebar })); }

    closeSidebar = () => { this.setState({ sidebar: false }); }

    updateState = (data) => {
      this.setState(data);
    }

    render() {
      const { coordsList, loading, sidebar } = this.state;
      return (
        <>
          <Header
            updateState={this.updateState}
            loading={loading}
          />
          <div className="container">
            <OpenMap
              mapClass="open-map"
              coordsList={coordsList}
            />
            <Sidebar
              coordsList={coordsList}
              toggleSideBar={this.toggleSideBar}
              open={sidebar}
              closeSidebar={this.closeSidebar}
            />
          </div>
        </>
      );
    }
}

import React, { Component } from 'react';

import { search } from '../../modal';
import {
  GoogleMap, Header, Footer, Sidebar,
} from '../common';

export class Home extends Component {
    state={ coordsList: [], sidebar: false };

    getProperties = (data) => {
      this.setState({ loading: true });
      search(data, ({ result: coordsList }) => {
        const state = { loading: false, sidebar: true, coordsList: [] };
        if (coordsList) {
          state.coordsList = coordsList;
        }
        this.setState(state);
      });
    }

    toggleSideBar = () => { this.setState(({ sidebar }) => ({ sidebar: !sidebar })); }

    closeSidebar = () => { this.setState({ sidebar: false }); }

    render() {
      const { coordsList, loading, sidebar } = this.state;
      return (
        <>
          <Header
            getProperties={this.getProperties}
            loading={loading}
          />
          <div className="container">
            <GoogleMap
              containerClass="google-map-container"
              mapClass="google-map"
              coordsList={coordsList}
            />
            <Sidebar
              coordsList={coordsList}
              toggleSideBar={this.toggleSideBar}
              open={sidebar}
              closeSidebar={this.closeSidebar}
            />
          </div>
          <Footer />
        </>
      );
    }
}

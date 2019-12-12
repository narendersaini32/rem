import React, { Component } from 'react';
import PropTypes from 'prop-types';

const accessToken = 'pk.eyJ1IjoibmFyZW5kZXJzYWluaTMyIiwiYSI6ImNrNDJqZGt2ejAwemMzbW81Z280dDlmaWYifQ.gjQktVQZoAlkoPEaasSeew';

export class OpenMap extends Component {
  state = {};

  componentDidMount() {
    this.addMap();
  }

  addMap = () => {
    const { mapId } = this.props;
    const mymap = L && L.map(mapId).setView([55.6057, 13.0005], 13);
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'your.mapbox.access.token',
    }).addTo(mymap);
  }

  render() {
    const { mapId, mapClass } = this.props;
    return (
      <div id={mapId} className={mapClass} />
    );
  }
}

OpenMap.propTypes = {
  mapId: PropTypes.string,
  mapClass: PropTypes.string,
};

OpenMap.defaultProps = {
  mapId: 'open-map',
  mapClass: '',
};

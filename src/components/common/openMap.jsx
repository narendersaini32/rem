import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { OrangeMarkerSvg } from '../../images';

const accessToken = 'pk.eyJ1IjoibmFyZW5kZXJzYWluaTMyIiwiYSI6ImNrNDJqZGt2ejAwemMzbW81Z280dDlmaWYifQ.gjQktVQZoAlkoPEaasSeew';

let map;
const orangeIcon = L.icon({
  iconUrl: OrangeMarkerSvg,
  iconSize: [30, 30],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});
export class OpenMap extends Component {
  state = {};

  componentDidMount() {
    this.addMap();
  }

  componentDidUpdate({ coordsList }) {
    const { coordsList: newList } = this.props;
    if (!isEqual(coordsList, newList)) {
      this.addMarkers(newList);
    }
  }

  addMap = () => {
    const { mapId, coordsList, initialCoords } = this.props;
    let center = initialCoords;
    if (coordsList.length) {
      center = [coordsList[0].pinLat, coordsList[0].pinLon];
    }
    map = L.map(mapId).setView(center, 13);
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'your.mapbox.access.token',
    }).addTo(map);
    this.addMarkers(coordsList);
  }

  addMarkers = (coordsList) => {
    coordsList.forEach(({ pinLat: lat, pinLon: lng }) => {
      L.marker([lat, lng], { icon: orangeIcon }).addTo(map);
    });
    if (coordsList.length) {
      const center = [coordsList[0].pinLat, coordsList[0].pinLon];
      map.flyTo(center);
    }
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
  initialCoords: PropTypes.arrayOf(Number),
  coordsList: PropTypes.arrayOf(Object),
};

OpenMap.defaultProps = {
  mapId: 'open-map',
  mapClass: '',
  initialCoords: [55.6057, 13.0005],
  coordsList: [],
};

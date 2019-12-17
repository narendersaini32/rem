import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import geoCenter from 'geographic-center';
import { renderToString } from 'react-dom/server';

import { OrangeMarkerSvg } from '../../images';
import { OrangeCircle } from './orangeCircle';
import { KEYS } from '../../keys';

const { ACCESS_KEY } = KEYS;

let map;
let markers;
let orangeMarker;
let lastZoom;
const orangeMarkerIcon = L.icon({
  iconUrl: OrangeMarkerSvg,
  iconSize: [30, 30],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

const orangeCircleIcon = (coordsList = []) => L.divIcon({
  html: renderToString(<OrangeCircle coordsList={coordsList} />),
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
      this.goToCenter();
    }
  }

  addMap = () => {
    const { mapId, coordsList, initialCoords } = this.props;
    let center = initialCoords;
    if (coordsList.length) {
      center = [coordsList[0].pinLat, coordsList[0].pinLon];
    }
    map = L.map(mapId).setView(center, 13);
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESS_KEY}`, {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'your.mapbox.access.token',
    }).addTo(map);
    this.addMarkers(coordsList);
    map.on('zoomend', this.handleZoom);
    lastZoom = map.getZoom();
  }

  handleZoom = () => {
    const zoomLevel = map.getZoom();
    if (lastZoom !== zoomLevel) {
      const { coordsList } = this.props;
      this.addMarkers(coordsList);
      lastZoom = zoomLevel;
    }
  }

  goToCenter = () => {
    const { coordsList } = this.props;
    if (coordsList.length) {
      const center = [coordsList[0].pinLat, coordsList[0].pinLon];
      map.flyTo(center);
    }
  }

  addMarkers = (coordsList) => {
    const zoomLevel = map.getZoom();
    if (markers) {
      markers.forEach((marker) => {
        map.removeLayer(marker);
      });
    }
    if (orangeMarker) {
      map.removeLayer(orangeMarker);
    }
    if (zoomLevel >= 14) {
      markers = coordsList.map((
        { pinLat: lat, pinLon: lng },
      ) => L.marker([lat, lng], { icon: orangeMarkerIcon }).addTo(map));
    } else if (coordsList.length) {
      orangeMarker = L.marker(
        this.findCenter(), { icon: orangeCircleIcon(coordsList) },
      ).addTo(map);
    }
  }

  findCenter = () => {
    const { initialCoords, coordsList } = this.props;
    if (!coordsList.length) {
      return initialCoords;
    }
    const center = geoCenter(coordsList.map(({ pinLat: lat, pinLon: lon }) => ({ lat, lon })));
    return center;
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

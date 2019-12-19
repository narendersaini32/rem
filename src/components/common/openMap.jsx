import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, isEmpty } from 'lodash';
import geoCenter from 'geographic-center';
import { renderToString } from 'react-dom/server';
import { boundary } from '../../modal';

import { OrangeCircle } from './orangeCircle';
import { OrangeMarker } from './orangeMarker';
import { PropertyCard } from './propertyCard';
import { KEYS } from '../../keys';
import { redirectToPropertyPage } from '../../util';

const { ACCESS_KEY } = KEYS;

let map;
let markers;
let orangeMarker;
let lastZoom;
let boundariesMarker = [];

const orangeColor = '#e8541e';
const orangeMarkerIcon = (id) => L.divIcon({
  html: renderToString(<OrangeMarker id={id} />),
});

const orangeCircleIcon = (coordsList = []) => L.divIcon({
  html: renderToString(<OrangeCircle coordsList={coordsList} />),
});


export class OpenMap extends Component {
  state = { boundariesCoords: [] };

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
    this.getBoundaries();
  }

  getBoundaries = () => {
    const center = map.getCenter();
    if (!isEmpty(center)) {
      const { lat, lng: lon } = center;
      boundary({ lat, lon }, (res) => {
        const { result, success } = res || {};
        if (success && !isEmpty(result)) {
          this.setState({ boundariesCoords: result }, this.addBoundaries);
        }
      });
    }
  }

  addBoundaries = () => {
    const { boundariesCoords } = this.state;
    if (!isEmpty(boundariesMarker)) {
      this.removeBoundaries();
    }
    boundariesMarker = boundariesCoords.map((obj) => {
      const { boundaries = [] } = obj || {};
      const coords = [];
      boundaries.forEach(({ lat, lon }) => {
        coords.push([lat, lon]);
      });
      return L.polygon(coords, { color: orangeColor }).addTo(map);
    });
  }

  removeBoundaries = () => {
    boundariesMarker.forEach((bound) => {
      map.removeLayer(bound);
    });
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
        obj,
      ) => {
        const { pinLat: lat, pinLon: lng, propertyID } = obj;
        const marker = L.marker([lat, lng], { icon: orangeMarkerIcon(propertyID) }).addTo(map);
        marker.bindPopup(renderToString(<PropertyCard {...obj} imgLoaded />));
        marker.on('click', () => {
          this.attachInfoOnClick(propertyID);
        });
        return marker;
      });
    } else if (coordsList.length) {
      orangeMarker = L.marker(
        this.findCenter(), { icon: orangeCircleIcon(coordsList) },
      ).addTo(map);
    }
    if (zoomLevel >= 16) {
      this.getBoundaries();
    } else {
      this.removeBoundaries();
    }
  }

  attachInfoOnClick = (id) => {
    const ele = document.getElementById(`info-${id}`);
    if (ele) {
      ele.onclick = () => { redirectToPropertyPage(id); };
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

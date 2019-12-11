import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { OrangeMarkerSvg } from '../../images';

const GOOGLE_API_KEY = 'AIzaSyB-ABqYpkbn-pDrZbqMfXZn88QhpGRUHrw';

export class GoogleMap extends Component {
  state = {};

  componentDidMount() {
    if (typeof google !== 'undefined') {
      this.onLoad();
    }
  }

  componentDidUpdate({ coordsList }) {
    const { coordsList: newList } = this.props;
    if (typeof google !== 'undefined' && !isEqual(coordsList, newList)) {
      this.onLoad();
    }
  }


  handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const scriptTag = scriptTags[0];
      scriptTag.onload = this.onLoad;
    }
  }


  onLoad = () => {
    const {
      coords, markerIcon, zoom, draggable, mapTypeControl, streetViewControl, mapId,
      coordsList,
    } = this.props;
    const latLng = {
      lat: coordsList.length ? coordsList[0].pinLat : coords[1],
      lng: coordsList.length ? coordsList[0].pinLon : coords[0],
    };
    const map = new google.maps.Map(document.getElementById(mapId), {
      zoom,
      center: latLng,
      mapTypeControl,
      streetViewControl,
    });
    if (coordsList.length) {
      let marker;
      coordsList.forEach(({ pinLat: lat, pinLon: lng }) => {
        marker = new google.maps.Marker({
          position: { lat, lng },
          map,
          draggable,
          icon: markerIcon,
        });
      });
      google.maps.event.addListener(marker, 'dragend', () => {
      });
    }
  }


  render() {
    const { containerClass, mapClass, mapId } = this.props;
    return (
      <>
        <Helmet
          script={[{ src: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places` }]}
          onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
        />
        <div className={containerClass}>
          <div id={mapId} className={mapClass} />
        </div>
      </>
    );
  }
}

GoogleMap.propTypes = {
  coords: PropTypes.arrayOf(Number),
  coordsList: PropTypes.arrayOf(Object).isRequired,
  containerClass: PropTypes.string,
  mapClass: PropTypes.string,
  markerIcon: PropTypes.string,
  mapId: PropTypes.string,
  zoom: PropTypes.number,
  draggable: PropTypes.bool,
  mapTypeControl: PropTypes.bool,
  streetViewControl: PropTypes.bool,
};

GoogleMap.defaultProps = {
  coords: [-77, 40],
  containerClass: '',
  mapClass: '',
  markerIcon: OrangeMarkerSvg,
  zoom: 14,
  draggable: false,
  mapTypeControl: true,
  streetViewControl: true,
  mapId: 'map',
};

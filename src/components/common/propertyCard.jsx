import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from './image';
import { InfoSvg, AnalyticsSvg, SaveSvg } from '../../images';
import { TEXT } from '../../local/text';
import { redirectToPropertyPage } from '../../util';

const { COUNTY, PROPERTY_NAME, PROPERTY_ID } = TEXT;

export class PropertyCard extends Component {
  state = {};

  redirectToPropertyPage = (id) => {
    if (id) {
      window.location.href = `/property/${id}`;
    }
  }

  handleMarkerOnMap = (id, size) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.style.width = size;
      ele.style.height = size;
      ele.style.backgroundSize = `${size} ${size}`;
    }
  }

  render() {
    const {
      propertyCounty, propertyID, propertyName, style, src, imgLoaded,
    } = this.props;
    const onMouseEnter = () => { this.handleMarkerOnMap(propertyID, '40px'); };
    const onMouseLeave = () => { this.handleMarkerOnMap(propertyID, '30px'); };
    return (
      <div
        className="property-card"
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="main-details">
          <Image
            src={src}
            className="property-image"
            imgLoaded={imgLoaded}
          />
          <div className="property-details">
            <div className="property-id">
              {propertyID}
            </div>
            <div className="property-name">
              {propertyName}
            </div>
            <div className="property-county">
              {propertyCounty}
            </div>
          </div>
        </div>
        <div className="property-actions">
          <div
            id={imgLoaded ? `info-${propertyID}` : ''}
            className="action"
            style={{ backgroundImage: `url(${InfoSvg})` }}
            onClick={() => { redirectToPropertyPage(propertyID); }}
          />
          <div
            className="action"
            style={{ backgroundImage: `url(${AnalyticsSvg})` }}
          />
          <div
            className="action"
            style={{ backgroundImage: `url(${SaveSvg})` }}
          />
        </div>
      </div>
    );
  }
}

PropertyCard.propTypes = {
  propertyCounty: PropTypes.string,
  propertyID: PropTypes.string,
  propertyName: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  imgLoaded: PropTypes.bool,
};

PropertyCard.defaultProps = {
  propertyCounty: COUNTY,
  propertyID: PROPERTY_ID,
  propertyName: PROPERTY_NAME,
  imgLoaded: false,
  style: {},
  src: 'https://storage.cloud.google.com/thumbnails-letcap-test/thumbnails/120217869.jpg',
};

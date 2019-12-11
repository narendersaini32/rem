import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from './image';
import { InfoSvg, AnalyticsSvg, SaveSvg } from '../../images';

export class PropertyCard extends Component {
    state={};

    render() {
      const { county, propertyID, propertyName } = this.props;
      return (
        <div className="property-card">
          <div className="main-details">
            <Image
              src="https://storage.cloud.google.com/thumbnails-letcap-test/thumbnails/120217869.jpg"
              className="property-image"
            />
            <div className="property-details">
              <div className="property-id">
                {propertyID}
              </div>
              <div className="property-name">
                {propertyName}
              </div>
              <div className="property-county">
                {county}
              </div>
            </div>
          </div>
          <div className="property-actions">
            <div
              className="action"
              style={{ backgroundImage: `url(${InfoSvg})` }}
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
  county: PropTypes.string,
  propertyID: PropTypes.string,
  propertyName: PropTypes.string,
};

PropertyCard.defaultProps = {
  county: 'County',
  propertyID: 'Property Id',
  propertyName: 'Property Name',
};

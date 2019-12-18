import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { OrangeMarkerSvg } from '../../images';

export class OrangeMarker extends Component {
    state={};

    render() {
      const { id } = this.props;
      return (
        <div
          id={id}
          className="orange-marker"
          style={{ backgroundImage: `url(${OrangeMarkerSvg})` }}
        />
      );
    }
}

OrangeMarker.propTypes = {
  id: PropTypes.string.isRequired,
};

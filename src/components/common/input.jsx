import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EyeSvg } from '../../images';

export class Input extends Component {
    state = {}

    render() {
      const { inputProps } = this.props;
      return (
        <div className="custom-input-container">
          <input
            className="custom-input"
            {...inputProps}
          />
          <div
            className="eye-icon"
            style={{ backgroundImage: `url(${EyeSvg})` }}
          />
        </div>
      );
    }
}

Input.propTypes = {
  inputProps: PropTypes.instanceOf(Object),
};

Input.defaultProps = {
  inputProps: {},
};

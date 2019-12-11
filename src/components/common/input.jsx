import React, { Component } from 'react';

import { EyeSvg } from '../../images';

export class Input extends Component {
    state = {}

    render() {
      const { props } = this;
      return (
        <div className="custom-input-container">
          <input
            className="custom-input"
            {...props}
          />
          <div
            className="eye-icon"
            style={{ backgroundImage: `url(${EyeSvg})` }}
          />
        </div>
      );
    }
}

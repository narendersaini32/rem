import React, { Component } from 'react';

import { InvertedLogoSvg } from '../../images';

export class Footer extends Component {
    state={};

    render() {
      return (
        <div className="footer">
          <div
            className="footer-logo"
            style={{ backgroundImage: `url(${InvertedLogoSvg})` }}
          />
        </div>
      );
    }
}

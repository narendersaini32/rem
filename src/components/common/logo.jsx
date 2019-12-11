import React, { Component } from 'react';

import { LogoLSvg, LetCapSVG, CorpSvg } from '../../images';

export class Logo extends Component {
    state={};

    render() {
      return (
        <div className="logo-wrapper">
          <div
            className="logo-l"
            style={{ backgroundImage: `url(${LogoLSvg})` }}
          />
          <div className="let-cap-corp-wrapper">
            <div
              className="logo-let-cap"
              style={{ backgroundImage: `url(${LetCapSVG})` }}
            />
            <div
              className="corp"
              style={{ backgroundImage: `url(${CorpSvg})` }}
            />
          </div>
        </div>
      );
    }
}

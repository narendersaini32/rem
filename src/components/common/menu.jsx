import React, { Component } from 'react';

import { MenuSvg } from '../../images';

export class Menu extends Component {
    state={};

    render() {
      return (
        <div
          className="menu-svg"
          style={{ backgroundImage: `url(${MenuSvg})` }}
        />
      );
    }
}

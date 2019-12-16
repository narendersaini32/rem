import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { OrangeCircleSvg } from '../../images';

export class OrangeCircle extends Component {
    State={};

    render() {
      const { coordsList } = this.props;
      let iconSize = ((30 * coordsList.length) / 200) + 30;
      iconSize = iconSize < 30 ? 30 : iconSize;
      iconSize += 'px';
      return (
        <div
          className="orange-circle-wrapper"
          style={{
            width: iconSize,
            height: iconSize,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${OrangeCircleSvg})`,
              width: iconSize,
              height: iconSize,
            }}
          />
          <div
            className="orange-circle-text"
          >
            {coordsList.length}
          </div>
        </div>
      );
    }
}

OrangeCircle.propTypes = {
  coordsList: PropTypes.arrayOf(Object),
};

OrangeCircle.defaultProps = {
  coordsList: [],
};

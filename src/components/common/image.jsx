/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Image extends Component {
  constructor(props) {
    super(props);
    const { src, imgLoaded } = this.props;
    this.state = { src, imgLoaded };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.src !== prevState.src) {
      return { src: nextProps.src, imgLoaded: false };
    }
    return null;
  }

    onImageLoad = () => {
      this.setState({ imgLoaded: true });
    }

    render() {
      const {
        className, onClick, imageWrapperClass,
      } = this.props;
      const { src } = this.state;
      const { imgLoaded } = this.state;
      const classes = `image ${className} ${imgLoaded ? 'showImg' : ''}`;
      return (
        <div className={imageWrapperClass}>
          <img
            className={classes}
            src={src}
            onLoad={this.onImageLoad}
            alt="rm"
            onClick={onClick}
          />
        </div>
      );
    }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  imageWrapperClass: PropTypes.string,
  imgLoaded: PropTypes.bool,
};

Image.defaultProps = {
  onClick: () => { },
  imageWrapperClass: '',
  imgLoaded: false,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { generalInfo } from '../../modal';

export class PropertyView extends Component {
  constructor(props) {
    super(props);
    this.state = { details: {}, loading: true };
    const { match: { params: { propertyId } } } = this.props;
    if (propertyId) {
      generalInfo(propertyId, this.getDetails);
    } else {
      this.redirectToHome();
    }
  }

getDetails=(data) => {
  const { result, success } = data || {};
  if (success && !isEmpty(result)) {
    this.setState({ details: result, loading: false });
  } else {
    this.redirectToHome();
  }
}

redirectToHome =() => {
  const { history: { push } } = this.props;
  push('/');
}

render() {
  const { loading, details: { propertyID, propertyName } } = this.state;
  return (
    !loading
      ? (
        <>
          <div>
            {propertyID}
          </div>
          <div>
            {propertyName}
          </div>
        </>
      ) : ''
  );
}
}

PropertyView.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import Twig from 'twig';

export default class ReactTwig extends React.Component {

  compileTemplate(template, data) {
    return Twig.twig({ data: template }).render(data);
  };

  render() {
    const { template, data, Component } = this.props;

    if (!template) {
      return false;
    }

    const __html = this.compileTemplate(template, data);

    return (
      <Component dangerouslySetInnerHTML={{__html}}/>
    );
  }
}

ReactTwig.defaultProps = {
  data: {},
  Component: 'div'
};

ReactTwig.propTypes = {
  Component: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  data: PropTypes.object
};

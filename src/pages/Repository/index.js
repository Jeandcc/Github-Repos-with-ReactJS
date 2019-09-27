import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  render() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    return <h1 Style="color:white">{repoName}</h1>;
  }
}

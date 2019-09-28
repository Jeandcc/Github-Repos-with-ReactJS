import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/apiGithub';

import {
  TitleWrapper,
  InputWrapper,
  RespositoryWrapper,
  Repository,
} from './styles';

import ContentHolder from '../../components/Container';

export default class Main extends Component {
  state = {
    newRepo: '',
    invalidRepo: false,
    repositories: [],
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleChange = e => {
    this.setState({ newRepo: e.target.value, invalidRepo: false });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { newRepo, repositories } = this.state;
    await api
      .get(`/repos/${newRepo}`)
      .then(response => {
        const repoName = response.data.full_name;
        const alreadyRegistered = repositories.includes(repoName);

        if (alreadyRegistered) {
          this.setState({ invalidRepo: true });
          throw new Error('Repositório duplicado');
        } else {
          this.setState({
            newRepo: '',
            repositories: [...repositories, repoName],
          });
        }
      })
      .catch(() => {
        this.setState({ invalidRepo: true });
      });
  };

  render() {
    const { repositories, newRepo, invalidRepo } = this.state;

    return (
      <ContentHolder>
        <TitleWrapper>
          <img src="images/GitHubLogo.svg" alt="" />
          <h1>Repositories</h1>
        </TitleWrapper>
        <InputWrapper onSubmit={this.handleSubmit} invalidRepo={invalidRepo}>
          <input
            onChange={this.handleChange}
            type="text"
            maxLength="256"
            placeholder="Ex: facebook/react"
            id="field"
            value={newRepo}
          />
          <button type="submit">+</button>
        </InputWrapper>
        <RespositoryWrapper>
          {repositories.map(repo => {
            return (
              <Repository key={repo}>
                <h2 className="repository-nname">{repo}</h2>
                <Link to={`/repositories/${encodeURIComponent(repo)}`}>
                  Details
                </Link>
              </Repository>
            );
          })}
        </RespositoryWrapper>
      </ContentHolder>
    );
  }
}

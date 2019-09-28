import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/apiGithub';

import ContentHolder from '../../components/Container';
import {
  InfoHeader,
  NavigationForIssues,
  Filters,
  Pagination,
  Issue,
  IssuesList,
  ReturnButton,
} from './styles';

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
    activeFilter: 'all',
    currentPage: 1,
  };

  async componentDidMount() {
    const { currentPage, activeFilter } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: activeFilter,
          per_page: 5,
          page: currentPage,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  changedPage = async () => {
    const { currentPage, repository, activeFilter } = this.state;
    const changedIssues = await api.get(
      `/repos/${repository.full_name}/issues`,
      {
        params: {
          state: activeFilter,
          page: currentPage,
          per_page: 5,
        },
      }
    );
    this.setState({ issues: changedIssues.data });
  };

  changePage = async direction => {
    const { currentPage } = this.state;
    const newPage = currentPage + direction;
    await this.setState({ currentPage: newPage });
    this.changedPage();
  };

  changeFilter = async newFilter => {
    await this.setState({ activeFilter: newFilter, currentPage: 1 });
    this.changedPage();
  };

  render() {
    const {
      repository,
      issues,
      loading,
      activeFilter,
      currentPage,
    } = this.state;

    const filters = ['all', 'open', 'closed'];

    if (loading) {
      return (
        <ContentHolder>
          <h1 className="carregando">Loading</h1>
        </ContentHolder>
      );
    }

    const disabled = currentPage === 1;

    return (
      <ContentHolder>
        <InfoHeader>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </InfoHeader>
        <NavigationForIssues>
          <Filters>
            {filters.map(filter => {
              if (filter === activeFilter) {
                return (
                  <button
                    key={filter}
                    type="button"
                    className="filter active-filter"
                  >
                    <div>{filter}</div>
                  </button>
                );
              }
              return (
                <button
                  type="button"
                  key={filter}
                  onClick={() => this.changeFilter(filter)}
                  className="filter"
                >
                  <div>{filter}</div>
                </button>
              );
            })}
          </Filters>
          <Pagination>
            <button
              type="button"
              disabled={disabled}
              onClick={() => this.changePage(-1)}
            >
              <img src="/images/Arrow.svg" alt="" />
            </button>
            <div>{currentPage}</div>
            <button type="button" onClick={() => this.changePage(1)}>
              <img src="/images/Arrow.svg" alt="" className="next-page" />
            </button>
          </Pagination>
        </NavigationForIssues>
        <IssuesList>
          {issues.map(issue => {
            return (
              <Issue key={issue.id} link={issue.html_url}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div className="issue-info-wrapper">
                  <div className="issue-title-wrapper">
                    <h2 className="issue-name">{issue.title}</h2>
                    {issue.labels.map(label => {
                      return (
                        <div key={label.id} className="issue-tags">
                          <div>{label.name}</div>
                        </div>
                      );
                    })}
                  </div>
                  <h3 className="issue-creator-name">{issue.user.login}</h3>
                </div>
              </Issue>
            );
          })}
        </IssuesList>
        <Link to="/">
          <ReturnButton>
            <img src="/images/Arrow-2.svg" alt="Return Button" />
            <div>Repositories</div>
          </ReturnButton>
        </Link>
      </ContentHolder>
    );
  }
}

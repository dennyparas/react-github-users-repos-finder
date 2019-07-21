import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import TypeSelector from '../components/TypeSelector';
import UserList from '../components/UserList';
import RepoList from '../components/RepoList';
import { searchUsersRepos, clearResults } from '../actions/github';

const Home = ({ github, location, searchUsersRepos, clearResults }) => {
  let params = new URLSearchParams(location.search);
  let searchParams = params.get('q');
  let pageParams = params.get('p');
  let typeParams = params.get('type');
  let sortParams = params.get('s');

  const getGithub = () => {
    if (searchParams !== null) {
      if (pageParams === null) pageParams = 1;
      if (typeParams === null) typeParams = 'Users';
      if (sortParams === null) sortParams = '';
      searchUsersRepos(searchParams, pageParams, typeParams, sortParams);
    } else {
      clearResults();
    }
  };

  useEffect(() => {
    getGithub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, pageParams, typeParams, sortParams]);

  return (
    <Fragment>
      <SearchForm />
      <TypeSelector />
      {github.type === 'Users' && <UserList />}
      {github.type === 'Repositories' && <RepoList />}
    </Fragment>
  );
};
const mapStateToProps = state => ({
  github: state.github
});

export default connect(
  mapStateToProps,
  { searchUsersRepos, clearResults }
)(Home);

import {
  SET_LOADING,
  SET_SEARCH_QUERY,
  SEARCH_USERS,
  SEARCH_REPOS,
  SET_SEARCH_USERS_TOTAL,
  SET_SEARCH_REPOS_TOTAL,
  CLEAR_RESULTS
} from './types';
import axios from '../axios';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const setSearchQuery = searchQuery => {
  return {
    type: SET_SEARCH_QUERY,
    payload: searchQuery
  };
};
// Search Users and Repos
export const searchUsersRepos = (activeSearchQuery, page, type, sort) => (
  dispatch,
  getState
) => {
  dispatch(setLoading());
  const { searchQuery } = getState().github;
  if (page === 1 && activeSearchQuery !== searchQuery) {
    dispatch(getUsersReposTotal(activeSearchQuery));
  }
  if (type === 'Users') {
    dispatch(searchUsers(activeSearchQuery, page, type, sort));
  }

  if (type === 'Repositories') {
    dispatch(searchRepos(activeSearchQuery, page, type, sort));
  }
  if (activeSearchQuery !== searchQuery) {
    dispatch(setSearchQuery(activeSearchQuery));
  }
};

// Search Users base on params
export const searchUsers = (
  searchQuery,
  page,
  type,
  sort
) => async dispatch => {
  dispatch(setLoading());
  try {
    if (sort === 'best') sort = '';
    const searchUsers = await axios.get(
      `users?q=${searchQuery}&p=${page}&type=${type}&sort=${sort}&order=desc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    if (searchUsers) {
      dispatch({
        type: SEARCH_USERS,
        payload: searchUsers.data.items
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Search Repos base on params
export const searchRepos = (
  searchQuery,
  page,
  type,
  sort
) => async dispatch => {
  dispatch(setLoading());
  try {
    if (sort === 'best') sort = '';
    const searchRepos = await axios.get(
      `repositories?q=${searchQuery}&p=${page}&type=${type}&sort=${sort}&order=desc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    if (searchRepos) {
      dispatch({
        type: SEARCH_REPOS,
        payload: searchRepos.data.items
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// get users and repos total
export const getUsersReposTotal = searchQuery => async dispatch => {
  try {
    const [getUsersTotal, getReposTotal] = await Promise.all([
      axios.get(
        `users?q=${searchQuery}&client_id=${githubClientId}&client_secret=${githubClientSecret}&order=desc`
      ),
      axios.get(
        `repositories?q=${searchQuery}&client_id=${githubClientId}&client_secret=${githubClientSecret}&order=desc`
      )
    ]);
    if (getUsersTotal && getReposTotal) {
      dispatch({
        type: SET_SEARCH_USERS_TOTAL,
        payload: getUsersTotal.data.total_count
      });
      dispatch({
        type: SET_SEARCH_REPOS_TOTAL,
        payload: getReposTotal.data.total_count
      });
    } else {
      dispatch({
        type: CLEAR_RESULTS
      });
    }
  } catch (error) {
    console.log(error);
  }
};
//  Clear results
export const clearResults = () => {
  return {
    type: CLEAR_RESULTS
  };
};

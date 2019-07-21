import {
  SET_LOADING,
  SET_SEARCH_QUERY,
  SEARCH_USERS,
  SEARCH_REPOS,
  SET_SEARCH_USERS_TOTAL,
  SET_SEARCH_REPOS_TOTAL,
  CLEAR_RESULTS
} from '../actions/types';

const initialState = {
  searchQuery: null,
  type: 'Users',
  loading: false,
  usersTotal: null,
  reposTotal: null,
  users: [],
  repos: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
        type: 'Users'
      };
    case SEARCH_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
        type: 'Repositories'
      };
    case SET_SEARCH_USERS_TOTAL:
      return {
        ...state,
        usersTotal: payload,
        loading: false
      };
    case SET_SEARCH_REPOS_TOTAL:
      return {
        ...state,
        reposTotal: payload,
        loading: false
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        users: [],
        repos: [],
        usersTotal: null,
        reposTotal: null,
        loading: false
      };
    default:
      return state;
  }
}

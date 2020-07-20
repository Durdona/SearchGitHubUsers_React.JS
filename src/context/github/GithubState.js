import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types.js';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};
	const [ state, dispatch ] = useReducer(GithubReducer, initialState);

	//  Search Github Users
	const handleSearchUsers = async (text) => {
		setLoading();
		// console.log(text);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items
		});
	};

	// Get single Github user
	const getUser = async (username) => {
		setLoading();

		console.log(username);
		const res = await axios.get(
			`https://api.github.com/users/${username}?&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(res.data);
		dispatch({
			type: GET_USER,
			payload: res.data
		});
	};

	//  Get Repos

	//  Clear Users
	const handleClearUsers = () => dispatch({ type: CLEAR_USERS });

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				handleSearchUsers,
				handleClearUsers,
				getUser
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

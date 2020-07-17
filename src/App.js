import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	// show default users
	// async componentDidMount () {
	// 	console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
	// 	this.setState({ loading: true });

	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process
	// 			.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);
	// 	this.setState({ users: res.data, loading: false });
	// 	console.log(res.data);
	// }

	handleSearchUsers = async (text) => {
		this.setState({ loading: true });
		console.log(text);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	handleClearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	render () {
		return (
			<div className="App">
				<Navbar title="GitHub Finder" icon="fab fa-github" />
				<div className="container">
					<Search
						searchUsers={this.handleSearchUsers}
						clearUsers={this.handleClearUsers}
						showClear={this.state.users.length > 0 ? true : false}
					/>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;

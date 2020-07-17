import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
		user: {}
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

	// Get single Github user
	getUser = async (username) => {
		this.setState({ loading: true });
		console.log(username);
		const res = await axios.get(
			`https://api.github.com/users/${username}?&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(res.data);
		this.setState({ user: res.data, loading: false });
	};

	// Clear users from state
	handleClearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	// Set Alert
	handleSetAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render () {
		const { users, user, loading } = this.state; // destructuring state
		return (
			<Router>
				<div className="App">
					<Navbar title="GitHub Finder" icon="fab fa-github" />
					<div className="container">
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={this.handleSearchUsers}
											clearUsers={this.handleClearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.handleSetAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:login"
								render={(props) => (
									<User {...props} getUser={this.getUser} user={user} loading={loading} />
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

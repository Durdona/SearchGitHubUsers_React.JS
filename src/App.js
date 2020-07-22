import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

const App = () => {
	const [ alert, setAlert ] = useState(null);

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

	// Search GIthub Users

	// Get users repos

	// Clear users from state

	// Set Alert
	const handleSetAlert = (msg, type) => {
		setAlert({ msg, type });

		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar title="GitHub Finder" icon="fab fa-github" />
					<div className="container">
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search setAlert={handleSetAlert} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route exact path="/user/:login" component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;

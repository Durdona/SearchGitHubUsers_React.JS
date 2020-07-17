import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	constructor (props) {
		super(props);
		this.state = {
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired
	};

	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit (e) {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	}

	render () {
		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={this.state.text}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
				{this.props.showClear && (
					<button className="bt btn-light btn-block" onClick={this.props.clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;

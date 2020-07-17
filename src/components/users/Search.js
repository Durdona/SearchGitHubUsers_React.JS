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
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired
	};

	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit (e) {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('  Please enter something ...', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	}

	render () {
		const { showClear, clearUsers } = this.props; // destructuring props
		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="text"
						placeholder="Search Users ..."
						autoComplete="off"
						value={this.state.text}
						onChange={this.handleChange}
						style={{
							backgroundColor: 'rgba(0,0,0, 0.1)',
							padding: '10px',
							borderRadius: '5px',
							outline: 'none'
						}}
					/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
				{showClear && (
					<button
						className="btn btn-light btn-block"
						onClick={clearUsers}
						style={{
							border: '1px solid black',
							color: 'white',
							background: 'rgba(145, 61, 136, 1)'
						}}
					>
						Clear Search
					</button>
				)}
			</div>
		);
	}
}

export default Search;

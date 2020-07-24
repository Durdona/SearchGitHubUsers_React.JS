import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [ text, setText ] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.handleSetAlert('  Please enter something ...', 'light');
		} else {
			githubContext.handleSearchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<p className="searchForm">
					<input
						type="text"
						name="text"
						placeholder="Search Users ..."
						autoComplete="off"
						value={text}
						onChange={handleChange}
						style={{
							backgroundColor: 'rgba(0,0,0, 0.1)',
							padding: '10px',
							borderRadius: '5px',
							outline: 'none',
							paddingLeft: '50px'
						}}
					/>
					<label htmlFor="text">
						<i className="fas fa-users" />
					</label>
				</p>
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.handleClearUsers}
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
};

export default Search;

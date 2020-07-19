import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	const [ text, setText ] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('  Please enter something ...', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
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
};
Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};
export default Search;

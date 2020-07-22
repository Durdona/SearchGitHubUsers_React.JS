import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div>
			<h1>Sorry, we couldn't find the page you requested</h1>
			<p className="lead">Please try searching again</p>

			<Link to="/" className="btn btn-light" style={{ backgroundColor: 'rgba(145, 61, 136, 1)', color: 'white' }}>
				Back To Search
			</Link>
		</div>
	);
};

export default NotFound;

import React from 'react';

export const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`} style={{ fontWeight: 'bold', fontFamily: 'serif' }}>
				<i className="fas fa-info-circle" style={{ color: 'crimson' }} />
				{alert.msg}
			</div>
		)
	);
};

export default Alert;

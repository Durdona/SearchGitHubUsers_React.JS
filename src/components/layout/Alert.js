import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;

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

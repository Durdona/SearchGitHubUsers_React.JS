import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;

	return (
		alert !== null && (
			<div
				className={`alert alert-${alert.type}`}
				style={{
					fontWeight: ' ',
					fontFamily: 'serifs ',
					fontSize: '1.1rem',
					backgroundColor: 'rgba(255, 255, 255, 0.5',
					color: 'crimson'
				}}
			>
				{/* <i className="fas fa-info-circle" style={{ color: 'crimson', fontSize: '1.3rem' }} /> */}
				<i className="fas fa-exclamation" style={{ color: 'crimson', fontSize: '1.3rem' }} />
				{alert.msg}
			</div>
		)
	);
};

export default Alert;

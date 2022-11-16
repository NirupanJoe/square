import { React } from 'react';

const Square = (context) => {
	const { data: { size, x, y }} = context;
	const style = {
		width: `${ size }%`,
		height: `${ size }%`,
		top: `${ y }%`,
		left: `${ x }%`,
	};

	return <div className="square" style={ style }/>;
};

export default Square;

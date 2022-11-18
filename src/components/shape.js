import { React } from 'react';

const Shape = (context) => {
	const { data: { size, x, y, type }} = context;
	const style = {
		width: `${ size }%`,
		height: `${ size }%`,
		top: `${ y }%`,
		left: `${ x }%`,
	};

	return <div className={ `shape ${ type }` } style={ style }/>;
};

export default Shape;

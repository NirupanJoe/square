import { React } from 'react';

const two = 2;

const Shape = (context) => {
	const { data: { size, x, y, type }} = context;

	const typeStyle = {
		triangle: {
			borderLeft: `${ size / two }vMin solid transparent`,
			borderRight: `${ size / two }vMin solid transparent`,
			borderBottom: `${ size }vMin solid`,
			width: 0,
			height: 0,
		},
	};
	const style = {
		width: `${ size }%`,
		height: `${ size }%`,
		top: `${ y }%`,
		left: `${ x }%`,
		...typeStyle[type],
	};

	return <div className={ `shape ${ type }` } style={ style }/>;
};

export default Shape;

import { React } from 'react';
import ObjectManager from '../services/objectManager';
import ProjectManager from '../services/projectManager';

const two = 2;

const styleType = {
	triangle: (size) => ({
		borderLeft: `${ size / two }vMin solid transparent`,
		borderRight: `${ size / two }vMin solid transparent`,
		borderBottom: `${ size }vMin solid`,
		width: 0,
		height: 0,
	}),
};

const getStyle = (context) => {
	const { data: { size, x, y, type }} = context;

	return {
		width: `${ size }%`,
		height: `${ size }%`,
		top: `${ y }%`,
		left: `${ x }%`,
		...styleType[type] && styleType[type](size),
	};
};

const dummyStyle = (context) => {
	const { data: { direction }} = context;
	const position = ProjectManager.getPosition(context);

	return {
		...getStyle(context),
		...ObjectManager.isXAxis(direction)
			? { left: `${ position }%` }
			: { top: `${ position }%` },
	};
};

const Shape = (context) => {
	const { data: { type }} = context;

	return (
		<>
			<div className={ `shape ${ type }` } style={ getStyle(context) }/>
			<div className={ `shape ${ type }` } style={ dummyStyle(context) }/>
		</>
	);
};

export default Shape;

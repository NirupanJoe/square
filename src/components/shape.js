import { React } from 'react';
import ObjectManager from '../services/objectManager';
import ProjectManager from '../services/projectManager';

const two = 2;

const styleType = {
	triangle: ({ size, color = '000' }) => ({
		borderLeft: `${ size / two }vMin solid transparent`,
		borderRight: `${ size / two }vMin solid transparent`,
		borderBottom: `${ size }vMin solid #${ color }`,
		width: 0,
		height: 0,
		background: 'transparent',
	}),
};

const getStyle = (context) => {
	const { data: { size, x, y, type, color }} = context;

	return {
		width: `${ size }%`,
		height: `${ size }%`,
		top: `${ y }%`,
		left: `${ x }%`,
		background: `#${ color }`,
		...styleType[type] && styleType[type](context.data),
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

const Shape = (context) =>
	[getStyle, dummyStyle].map((style, key) =>
		<div
			key={ key }
			className={ `shape ${ context.data.type }` }
			style={ style(context) }
			onClick={ () => context.actions.setRndColor(context.data) }
		/>);

export default Shape;

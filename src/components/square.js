import { React } from 'react';
import ObjectManager from '../services/objectManager';

const Square = (context) => {
	const { size, x, y } = ObjectManager.getPosition(context);
	const style = {
		width: `${ size }%`,
		height: `${ size }%`,
		top: `${ y }%`,
		left: `${ x }%`,
	};

	return <div className="square" style={ style }/>;
};

export default Square;

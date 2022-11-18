import { React } from 'react';
import Shape from './shape';

const Board = (context) => {
	const { state: { objects }} = context;

	return (
		<div className="board">
			{ objects.map((data, key) =>
				<Shape key={ key } { ...{ ...context, data } }/>)}
		</div>
	);
};

export default Board;

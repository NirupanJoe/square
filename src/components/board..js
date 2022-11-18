import { React } from 'react';
import Square from './square';

const Board = (context) => {
	const { state: { objects }} = context;

	return (
		<div className="board">
			{ objects.map((data, key) =>
				<Square key={ key } { ...{ ...context, data } }/>)}
		</div>
	);
};

export default Board;

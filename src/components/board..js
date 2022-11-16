import { React } from 'react';
import Square from './square';

const Board = (context) => {
	const { state: { object }} = context;

	return (
		<div className="board">
			{ object.map((data, key) =>
				<Square key={ key } { ...{ ...context, data } }/>)}
		</div>
	);
};

export default Board;

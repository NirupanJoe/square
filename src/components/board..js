import { React } from 'react';
import Square from './square';

const Board = (context) =>
	<div className="board">
		<Square { ...context }/>
	</div>;

export default Board;

import { React, useEffect } from 'react';
import './App.scss';
import Board from './components/board.';
import Ticker from './services/ticker';

const App = (context) => {
	useEffect(() => Ticker.start(context), []);

	return (
		<div className="App" role="App">
			<Board { ...context }/>
		</div>
	);
};

export default App;

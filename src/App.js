import { React } from 'react';
import './App.scss';
import Board from './components/board.';

const App = (context) =>
	<div className="App" role="App">
		<Board { ...context }/>
	</div>;

export default App;

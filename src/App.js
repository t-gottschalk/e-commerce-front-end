import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

const HatsPage = () => {
	return(
		<div>
			<h1>Hats Page</h1>
		</div>
	)
};

function App() {
  return (
    <div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
    </div>
  );
}

export default App;

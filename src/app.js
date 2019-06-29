import './app.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
	render(){
		return(
			<div className="app">app from React.js</div>
			)
	}
}

ReactDOM.render(<App />,document.getElementById("app"));
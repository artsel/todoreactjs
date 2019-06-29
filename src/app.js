import './app.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Search from './components/Search';
import {todos} from './db/todos';
import TodoList from './components/TodoList';

class App extends Component{
	constructor(){
		super();
		this.state = {
			tododata:todos
		}
		this.triggerPropsLabel = (arr, id, propName) => {
			const idx = arr.findIndex(el => el.id == id);
			const oldItem = arr[idx];
			const newItem = { ...oldItem, [propName]: !oldItem[propName] };
			return [...arr.slice(0,idx), newItem, ...arr.slice(idx + 1)];
		};

		this.onLabelClick = id =>{
			this.setState(({ tododata }) => {
				return {tododata: this.triggerPropsLabel(tododata,id,"done")};
			})
		}
	}
	render(){
		const {tododata} = this.state;
		return(
			<div className="app">
			<Header doned='5' doit='3' />
			<Search />
			<TodoList 
				todoprops={tododata}
				onLabelClick={this.onLabelClick}
			 />
			</div>
			)
	}
}

ReactDOM.render(<App />,document.getElementById("app"));

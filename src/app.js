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
		this.onDeleteItem = id => {
			this.setState(({tododata}) => {
				const idx = tododata.findIndex(el => el.id == id);
				const newArray = [
				...tododata.slice(0, idx),
				...tododata.slice(idx + 1)
				];
				return {tododata:newArray};
			});
		};

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

		this.onImportantClick = id => {
			this.setState(({tododata}) => {
				return {tododata: this.triggerPropsLabel(tododata,id,"important")};
			});
		}
	}
	render(){
		const {tododata} = this.state;
		const todoLength = tododata.length;
		const todoDoned = tododata.filter(el => el.done).length;
		const todoDoit = todoLength - todoDoned;
		return(
			<div className="app">
			<Header todoLength={todoLength} doned={todoDoned} doit={todoDoit} />
			<Search />
			<TodoList 
				todoprops={tododata}
				onLabelClick={this.onLabelClick}
				onImportantClick={this.onImportantClick}
				onDeletedClick={this.onDeleteItem}
			 />
			</div>
			)
	}
}

ReactDOM.render(<App />,document.getElementById("app"));

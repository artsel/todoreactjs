import './TodoList.css';
import React,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
	render(){
		const {todoprops, onLabelClick, onImportantClick, onDeletedClick}=this.props;
		const elements = todoprops.map(todo => {
			return(
			<TodoItem
				key={todo.id}
				label={todo.title}
				{...todo}
				onLabelClick = {() => onLabelClick(todo.id)}
				onImportantClick = {() => onImportantClick(todo.id)}
				onDeletedClick = {() => onDeletedClick(todo.id)}
			/>
			);
		}
		);

		return(
			<ul className="todo-list">
				<h3> TodoList </h3>
				{elements}
			</ul>
			)
	}
}
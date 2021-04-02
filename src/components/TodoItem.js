import './TodoItem.css';
import React,{Component} from 'react';
export default class Todoitem extends Component{
	render(){
		const {label, done=false,important=false, onLabelClick, onImportantClick, onDeletedClick} = this.props;
		let classNames = "todo-list-item";
		if (done){
			classNames += " done";
		}
		if (important){
			classNames += " important";
		}

		return(
		<span className="todo-item">
			<span onClick={onLabelClick} className={classNames}>{label}</span>
			<button onClick={onImportantClick} type="button">!</button>
			<button onClick={onDeletedClick} type="button">X</button>
		</span>
			)
	}
}
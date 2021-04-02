import './Search.css';
import React,{Component} from 'react';

export default class Search extends Component{
	constructor(){
		super();
		this.state ={
			inputText: ""
		}
		this.onSearchChange =e=>{
			const onSearchInput = e.target.value;
			this.setState({inputText: onSearchInput });
			this.props.onSearchChange(onSearchInput);
		}
	}
	render(){
		const {inputText} = this.state.inputText
		const {placeholder, onSearchChange} = this.props;
		return(
			<input 
				className="search-panel" 
				placeholder={placeholder}
				onChange={this.onSearchChange}
				value={inputText}
			/>
			)
	}
}
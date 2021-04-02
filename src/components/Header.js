import './Header.css';
import React,{Component} from 'react';

class Header extends Component{
	render(){
		const {todoLength, doned, doit} = this.props;
		return(
			<header className="header">
				<h1>Список дел: {todoLength}</h1>
				<span className="doed">Выполнено: {doned} </span>
				<span className="doit">Выполнить: {doit} </span>
			</header>
			)
	}
}

export default Header;
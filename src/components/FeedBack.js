import './FeedBack.css';
import React,{Component} from 'react';

export default class FeedBack extends Component {
render(){
	return(
		<form action="http://formspree.io/artys74@mail.ru" method="POST">
			<p><input className="form-input-name" type="text" name="name" required placeholder="Имя" /></p>
			<p><input type="email" name="_replyto" required placeholder="Email" /></p>
			<p><textarea name="Сообщение" required placeholder="Ваше сообщение" rows="7" /></p>
			<input type="submit" value="Отправить" />
		</form>
		)
}
}
import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
	static propTypes = {
		onRegClick: PropTypes.func.isRequired
	}

	render(){
	let { onRegClick } = this.props;
		return(
			<div>
				<h1>HintPic</h1>

				<button onClick={ onRegClick }>Register</button>

				<form>
					<label>
					Login:
					<input type="text" name="user-name" placeholder="Username"/>
					</label>

					<label>
					Password:
					<input type="text" name="password" placeholder="Password"/>
					</label>

					<img src="http://fillmurray.com/50/50"/>
					<p>És un fet establert de forma evident que un lector...</p>

					<button>Log in</button>
				</form>

			</div>
		);
	}
}
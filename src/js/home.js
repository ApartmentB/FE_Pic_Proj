import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class Home extends Component {
	static propTypes = {
		onRegClick: PropTypes.func.isRequired,
		onLogIn: PropTypes.func.isRequired
	}

	render(){
	let { onRegClick, onLogIn } = this.props;
		return(
			<div>

				<div className="hintpic">
					<div><h1>HintPic</h1></div>
				</div>

				<div><button onClick={ onRegClick }>Register</button></div>

				<div className="SSF">
					<SimpleSerialForm onData={ onLogIn }>

						<div className="labels">
							<div>
								<label>
								Login:
								<input type="text" name="user_name" placeholder="Username"/>
								</label>
							</div>

							<div>
								<label>
								Password:
								<input type="password" name="password" placeholder="Password"/>
								</label>
							</div>
						</div>

						<button>Log in</button>
					</SimpleSerialForm>
				</div> 

				<div className="hero-image">
					<img src="http://fillmurray.com/50/50"/>
					<p>Welcome to HintPic, the free forum to post pics, share with 
					friends, and win points.</p>
				</div>

			</div>
		);
	}
}

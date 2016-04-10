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

				<div className="reg-ssf">
					

					<div className="SSF">
						<SimpleSerialForm onData={ onLogIn }>

							<div className="labels">
								<div>
									<label>
									<input type="text" name="user_name" placeholder="Username"/>
									</label>
								</div>

								<div>
									<label>
									<input type="password" name="password" placeholder="Password"/>
									</label>
								</div>

								<button className="btn" id="btn-login">Login</button>
							</div>

						</SimpleSerialForm>
					</div> 
				</div> 


				<div className="hintpic">
					<div><h1>Hint Pic</h1></div>
				</div>

				<div className="hero-image">
					<img src="http://i.imgur.com/NDcGJiO.jpg"/>
				</div>

				<div className="info-box">
					<div className="info">
						<h4>Post Pictures</h4>
						<div className="divider"></div>
						<p>Upload pictures and caption them in 100 characters or less. Simple. Yes, this is somewhat like Twitter, but we are definitely better. Try it today.</p>
					</div>

					<div className="info">
						<h4>Play the Game</h4>
						<div className="divider"></div>
						<p>Test your pun prowess against your friends. Can you guess the captions? If yes, you score points.</p>
					</div>

					<div className="info">
						<h4>Share with Friends</h4>
						<div className="divider"></div>
						<p>Share posts with friends and family. Hint Pic games are fun to play in class, on a road trip or when you're waiting in a long line.</p>
					</div>

				</div>

				<div className="fast-to-join">
					<div><h3>Free and fast to join</h3></div>
					<div><p>Sign-up is instant. Start sharing pics today.</p></div>
					<div><button className="btn" id="btn-reg" onClick={ onRegClick }>Register</button></div>
				</div>

				<footer>

					<div className="foot-box">
						<div className="foot" id="Contact">
						<h4>CONTACT</h4>
						<p>Business Plaza</p>
						<p>2828 Peachtree St.</p>
						<p>Atlanta GA 30303</p>
						</div>

						<div className="foot" id="Employment">
						<h4>EMPLOYMENT</h4>
						<p>All Careers</p>
						<p>Support Staff</p>
						<p>Internships</p>
						</div>

						<div className="foot" id="Policies">
						<h4>POLICIES</h4>
						<p>Terms & Conditions</p>
						<p>Sharing & Fair Use</p>
						<p>Creative Commons</p>
						</div>

						<div className="foot" id="Outreach Programs">
						 <h4>OUTREACH</h4>
						<p>Mission</p>
						<p>Fundraising Events</p>
						<p>Support Us</p>
						</div>
						
						<div className="foot" id="Connect">
						<h4>FOLLOW</h4>
						<i class="fa fa-facebook"></i><p>Facebook</p>
						<i class="fa fa-twitter"></i><p>Twitter</p>
						<i class="fa fa-pinterest-p"></i><p>Pinterest</p>
						</div>
					</div>

				</footer>
			</div>
		);
	}
}

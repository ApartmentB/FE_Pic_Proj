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
					<div><button className="btn" id="btn-reg" onClick={ onRegClick }>Register</button></div>

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

								<button className="btn" id="btn-login">Log in</button>
							</div>

						</SimpleSerialForm>
					</div> 
				</div> 


				<div className="hintpic">
					<div><h1>Hint Pic</h1></div>
				</div>


				<div className="hero-image">
					<img src="http://rifarmsandfood.com/blog/wp-content/uploads/2012/01/Fainting-Goat.jpg"/>
					<p>Welcome to HintPic, the free forum to post pics, share with 
					friends, and win points.</p>
				</div>

				<h3>About</h3>
				<div className="info-box">
					<div className="info">
						<h4>Story</h4>
						<p>Photography is the science, art and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.[1] </p>
					</div>

					<div className="info">
					<h4>Mission</h4>
						<p>The result with photographic emulsion is an invisible latent image, which is later chemically "developed" into a visible image, either negative or positive depending on the purpose of the photographic material and the method of processing. </p>
					</div>

					<div className="info">
					<h4>Outreach</h4>
						<p>The word "photography" was created from the Greek roots φωτός (phōtos), genitive of φῶς (phōs), "light"[2] and γραφή (graphé) "representation by means of lines" or "drawing",[3] together meaning "drawing with light".[4]</p>
					</div>

					<div className="info">
					<h4>Connect</h4>
						<p> Johann von Maedler, a Berlin astronomer, is credited in a 1932 German history of photography as having used it in an article published on 25 February 1839 in the German newspaper Vossische Zeitung.[6] Both of these claims are now widely reported.</p>
					</div>
				</div>

				<footer>
					<div className="Contact">CONTACT</div>
					<div className="Employment">EMPLOYMENT</div>
					<div className="Policies">POLICIES</div>
					<div className="Fair Use">FAIR USE</div>
					<div className="Share">Share</div>
				</footer>
			</div>
		);
	}
}

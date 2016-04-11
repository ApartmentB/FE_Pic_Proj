import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class CreatePost extends Component {
	static propTypes = {
		onCreate: PropTypes.func.isRequired,
		onCancel: PropTypes.func.isRequired,
		currentUser: PropTypes.object.isRequired
	}

	constructor(props){
		super(props);
		this.state = {
			preview: "http://www.dreveterinary.com/lib/img/placeholder_small.png"
		}
	}

	dataHandler(data) {
    data.file = this.file;
    this.props.onCreate(data);
  	}

	dropHandler([file]) {
    this.setState({preview: file.preview});
    this.file = file;
  	}
	clickHandler(){
		let {onCancel} = this.props
		onCancel(this.props.currentUser)
	}
	render() {
	let { preview } = this.state;
	let { onCreate, onCancel } = this.props;
		return(
		<div>

		<div className="create-border">
			<div className="create-post-header">
				<h1>Create New Post</h1>
			</div>

			<div className="create-body">
				<SimpleSerialForm onData={ ::this.dataHandler }>

					<div className="drop-img">
						<Dropzone onDrop={ ::this.dropHandler }>
							<img src={ preview } height="195px"/>
						</Dropzone>
					</div>

				<label>
					<div className="form-body">
							<div className="caption-text">
								<p>Your original caption:</p>
							</div>
							
							<div>
							<input type="text" name="caption"/>
							</div>
					
						<div>
						<button className="btn drop-btn" id="submit-post">
							Submit
						</button>
						</div>
					</div>
				</label>


				</SimpleSerialForm>
				<button 
				className="btn drop-btn"
				id="create-post-cancel"
				onClick={::this.clickHandler}>
				Cancel
				</button>
			</div>
		</div>

			<div className="standard-footer">
          	&copy; Hint Pic 2016
        	</div>

		</div>
		)
	}
}

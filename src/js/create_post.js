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
			<h1>Create Post</h1>

			<SimpleSerialForm onData={ ::this.dataHandler }>
				<Dropzone onDrop={ ::this.dropHandler }>
					<img src={ preview } height="195px" width="195px"/>
				</Dropzone>
				<label>
					Caption:
					<input type="text" name="caption"/>
					<button>Create</button>
				</label>
			</SimpleSerialForm>

			<button onClick={::this.clickHandler}>Cancel</button>
		</div>
		)
	}
}

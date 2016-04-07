import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class CreatePost extends Component {
	static propTypes = {
		onCreate: PropTypes.func.isRequired
	}
	
	constructor(props){
		super(props);
		this.state = {
			preview: "http://www.dreveterinary.com/lib/img/placeholder_small.png"
		}
	}

	dropHandler([file]) {
    this.setState({preview: file.preview});
    this.file = file;
  	}

	render() {
	let { preview } = this.state;
	let { onCreate } = this.props;
		return(
		<div>
			<h1>Create Post</h1>
			
			<SimpleSerialForm onData={ onCreate }>
				<Dropzone onDrop={ ::this.dropHandler }>
					<img src={ preview } height="195px" width="195px"/>
				</Dropzone>
				<label>
					Caption:
					<input type="text"/>
					<button>Create</button>
				</label>
			</SimpleSerialForm>
			
			<button>Cancel</button>
		</div>
		)
	}
}
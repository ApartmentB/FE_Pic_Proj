import React, {PropTypes, Component} from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class Register extends Component {

  static propTypes = {
    onRegister: PropTypes.func.isRequired
  }

  render() {
    let { onRegister } = this.props;
    return (
      <div>
        <SimpleSerialForm onData={ onRegister }>
          <label>
            Full Name:
            <input type='text' name='full_name'/>
          </label>
          <label>
            Email:
            <input type='email' name='email'/>
          </label>
          <label>
            Username:
            <input type='text' name='user_name'/>
          </label>
          <label>
            Password:
            <input type='password' name='password'/>
          </label>
          <button>Register</button>
        </SimpleSerialForm>
        <button>Back</button>
      </div>
    );
  }
}

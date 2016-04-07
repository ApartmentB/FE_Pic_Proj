import React, {PropTypes, Component} from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class Register extends Component {

  static propTypes = {
    onRegister: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  }

  render() {
    let { onRegister, onBack } = this.props;
    return (
      <div>
        <SimpleSerialForm onData={ onRegister }>
          <label>
            Full Name:
            <input type='text' name='full_name' defaultValue='john smith'/>
          </label>
          <label>
            Email:
            <input type='email' name='email' defaultValue='john@smith.com'/>
          </label>
          <label>
            Username:
            <input type='text' name='user_name' defaultValue='john_user'/>
          </label>
          <label>
            Password:
            <input type='password' name='password' defaultValue='pw'/>
          </label>
          <button>Register</button>
        </SimpleSerialForm>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }
}

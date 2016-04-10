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

        <div className="reg-header">
        <h1>Register</h1>
        </div>
        
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
          <button className="btn drop-btn" id="submit-reg">Register</button>
        </SimpleSerialForm>
        <button className="btn drop-btn" onClick={onBack}>Back</button>
      
      <div className="standard-footer">
          &copy; Hint Pic 2016
        </div>

      </div>
    );
  }
}

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
        
        <div className="reg-body">
          <div className="reg-prompt">
          <p>Sign-up is instant. Create your profile and start sharing pics.</p>
          </div>

          <div className="reg-form">
          <SimpleSerialForm onData={ onRegister }>
            
            <div id="reg-text-area">
            <label>
              <span>Full Name:</span>
              <input type='text' name='full_name'/>
            </label>
            </div>

            <div id="reg-text-area">
            <label>
              Email:
              <input type='email' name='email'/>
            </label>
            </div>

            <div id="reg-text-area">
            <label>
              Username:
              n <input type='text' name='user_name'/>
            </label>
            </div>

            <div id="reg-text-area">
            <label>
              Password:
              <input type='password' name='password'/>
            </label>
            </div>

            <div>
            <button className="btn drop-btn" id="submit-reg">Register</button>
            </div>
          </SimpleSerialForm>
          </div>
      </div>

          <div>
          <button className="btn drop-btn" id="reg-back" onClick={onBack}>Back</button>
          </div>

          <div className="standard-footer">
              &copy; Hint Pic 2016
          </div>

      </div>
    );
  }
}

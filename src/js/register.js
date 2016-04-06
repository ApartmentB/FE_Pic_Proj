import React, {PropTypes, Component} from 'react';

export default class Register extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
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
        </form>
        <button>Back</button>
      </div>
    );
  }
}

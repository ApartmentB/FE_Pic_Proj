import React, {PropTypes, Component} from 'react';

export default class LoggedIn extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
  }
  render() {
    let {authUser} = this.props;
    return (
      <div>
        <h3>Hello {authUser.user_name}!</h3>
        <aside>
        <button>Make A Post</button>
        <button>Scoreboard</button>
        </aside>
        {this.props.children}
      </div>
    );
  }
}

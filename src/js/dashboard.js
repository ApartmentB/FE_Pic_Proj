import React, {PropTypes, Component} from 'react';

export default class Dashboard extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
    onLogOut: PropTypes.func.isRequired,
  }
  render() {
    let {authUser, onLogOut} = this.props;
    return (
      <div>
        <h3>Hello {authUser.user_name}!</h3>
        <aside>
        <button>Make A Post</button>
        <button>Scoreboard</button>
        </aside>
        {this.props.children}
        <button onClick={onLogOut}>Log Out</button>
      </div>
    );
  }
}

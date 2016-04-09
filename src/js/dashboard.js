import React, {PropTypes, Component} from 'react';

export default class Dashboard extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
    onLogOut: PropTypes.func.isRequired,
    onMake: PropTypes.func.isRequired,
    onScoreBoard: PropTypes.func.isRequired
  }
  render() {
    let {authUser, onLogOut, onMake, onUsers, onScoreBoard, children} = this.props;
    return (
      <div>
        <h3>Hello {authUser.user_name}!</h3>
        <aside>
        <button onClick={onMake}>Make A Post</button>
        <button onClick={onScoreBoard}>Scoreboard</button>
        </aside>
        {children}
        <button onClick={onLogOut}>Log Out</button>
        <button onClick={onUsers}>Get All Users</button>
      </div>
    );
  }
}

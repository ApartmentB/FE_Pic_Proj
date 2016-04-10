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

        <div className="logged-in-header">
          <h3><span>Hello</span> {authUser.user_name}!</h3>
          <h1>My Dashboard</h1>
          <button onClick={onMake}>New Post</button>
        </div>
        
        <div className="standard-body">
          <aside>
            <button onClick={onScoreBoard}>Scoreboard</button>
            <button onClick={onLogOut}>Log Out</button>
            <button onClick={onUsers}>Get All Users</button>
          </aside>
          <div className="main">
            {children}
          </div>
        </div>
        
        <div className="standard-footer">
          &copy, Hint Pic 2016
        </div>
      </div>
    );
  }
}

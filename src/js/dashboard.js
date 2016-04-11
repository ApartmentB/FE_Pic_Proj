import React, {PropTypes, Component} from 'react';

export default class Dashboard extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
    onLogOut: PropTypes.func.isRequired,
    onMake: PropTypes.func.isRequired,
    onScoreBoard: PropTypes.func.isRequired
  }
  render() {
    let {authUser, onLogOut, onMake, onPosts, onScoreBoard, children} = this.props;
    return (
      <div>

        <div className="logged-in-header">
          <h3><span>Welcome back,</span> {authUser.user_name}!</h3>
          <h1>My Dashboard</h1>
        </div>

        <div className="standard-body">
          <aside>
            <button className="btn black-btn" id="btn-login" onClick={onMake}>New Post</button>
            <button className="btn black-btn" id="btn-login" onClick={onScoreBoard}>Scoreboard</button>
            {/*<button className="btn black-btn" id="btn-login" onClick={onPosts}>Get All Posts</button>*/}
            <button className="btn black-btn" id="btn-login" onClick={onLogOut}>Log Out</button>
          </aside>
          <div className="main">
            {children}
          </div>
        </div>

        <div className="standard-footer">
          &copy; Hint Pic 2016
        </div>
      </div>
    );
  }
}

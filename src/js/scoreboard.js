import React, {PropTypes, Component} from 'react';

export default class Scoreboard extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  }
  makeScoreBoard(user){
    return (
      <li>
        <span>User: {user.user_name}</span>
        <span>Total Points: {user.score}</span>
      </li>
    )
  }
  clickHandler(){
    let {onBack, currentUser} = this.props
    onBack(currentUser)
  }
  render() {
    let {users, onBack} = this.props;
    return (
      <div className="scoreboard">

        <div className="scoreboard-header">
          <h1>Scoreboard</h1>
        </div>

        <div className="scores">
          <ol>
            {users.map(::this.makeScoreBoard)}
          </ol>
        </div>

        <button className="btn drop-btn" id="score-back" onClick={::this.clickHandler}>Back</button>
      
        <div className="standard-footer">
          &copy; Hint Pic 2016
        </div>

      </div>
    );
  }
}

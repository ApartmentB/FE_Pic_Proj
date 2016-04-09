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
    let {onBack} = this.props
    onBack(currentUser)
  }
  render() {
    let {users, onBack} = this.props;
    return (
      <div>
        <ul>
          {users.map{::this.makeScoreBoard}}
        </ul>
        <button onClick={this.clickHandler}>Back</button>
      </div>
    );
  }
}

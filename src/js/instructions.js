import React, {PropTypes, Component} from 'react';
import Cookies from 'js-cookie';
export default class Instructions extends Component {

  clickHandler(){
    let {onBack, user} = this.props;
    onBack(user)
  }

  render() {
    return (
      <div>
        <h1>How to Play</h1>
        <ol>
          <li>Click on a picture to view</li>
          <li>Type it what you think the hidden caption is for that image</li>
          <li>Click the GUESS button to see if you guessed correctly</li>
          <li>Try again until you can figure it out!</li>
        </ol>
        <ul>
          <li>If you'd like to make your own picture you can click on the CREATE POST button</li>
          <li>Once you're on the create post page you can upload your own image and add a secret caption that users can try to guess!</li>
          <li>And that's it! Register, browse pics, guess right, gain points! Compete with friends to see who can get the most points!</li>
        </ul>
        <button onClick={::this.clickHandler}>Back</button>
      </div>
    );
  }
}

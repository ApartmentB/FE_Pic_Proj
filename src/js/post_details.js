import React, {PropTypes, Component} from 'react';
import $ from 'jquery';
import SimpleSerialForm from 'react-simple-serial-form';

export default class PostDetails extends Component {
  static proptypes = {
    post: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    onNextPic: PropTypes.func.isRequired
  }
  clickHandler(){
    let {onBack, currentUser} = this.props
    onBack(currentUser)
  }
  dataHandler(data){
    let {post} = this.props;
    if (data.guess.toLowerCase() === post.caption.toLowerCase()){
        $('.caption').removeClass('unsolved')
        $('.status').html('YOU WIN!')
      }
        else if (data.guess.toLowerCase() !== post.caption.toLowerCase() &&
        $('.status').html('')){
          $('.status').html('GUESS AGAIN!')
    }else { $('.status').html('')}
  }
  nextPickHandler(){
    let { onNextPic } = this.props;
    onNextPic()
  }
  render() {
    let {post, onBack} = this.props;
    return (
      <div>

        <div className="post-det-header">
          <h1>Guess The Caption</h1>
        </div>

        <div className="post-det-body">
          <img src={post.image} alt='No hints!'/>
          <label htmlFor='guess'><h2>Type here:</h2></label>
          <h2 className='caption unsolved'>{post.caption}</h2>
        </div>

        <div className="post-det-form">
          <SimpleSerialForm onData={::this.dataHandler}>
            <input id='guess' type='text' placeholder='Take a guess!' name='guess'/>
            <button className="btn drop-btn" id="submit-guess">Submit</button>
          </SimpleSerialForm>
        </div>

        <div>
          <h1 className='status'></h1>
        </div>
        <button onClick={::this.nextPicHandler}>Next Pic</button>
        <button className="btn drop-btn" onClick={::this.clickHandler}>Back</button>

      </div>

    );
  }
}

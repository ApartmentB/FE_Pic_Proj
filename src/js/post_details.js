import React, {PropTypes, Component} from 'react';
import $ from 'jquery';
import SimpleSerialForm from 'react-simple-serial-form';

export default class PostDetails extends Component {
  static proptypes = {
    post: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,

    onNextPic: PropTypes.func.isRequired,

    onDelete: PropTypes.func.isRequired

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
        data.guess = ''
      }
        else if (data.guess.toLowerCase() !== post.caption.toLowerCase() &&
        $('.status').html('')){
          $('.status').html('GUESS AGAIN!')
    }else { $('.status').html('')}
  };

  nextPicHandler(){
    // let { post, onNextPic } = this.props;
    // onNextPic(post)
}
  deleteHandler(){
    let {onDelete, post} = this.props;
    onDelete(post)

  }
  render() {
    let {post, onBack, onDelete} = this.props;
    return (
      <div>


        <div className="post-det-header">
          <h1>Guess The Caption</h1>
        </div>

        <div className="game-area">
            <div className="post-det-body">
              <img src={post.url} alt='No hints!'/>
              <label htmlFor='guess'><h2>Type here:</h2></label>
              <h2 className='caption unsolved'>{post.caption}</h2>
            </div>

            <div className="post-det-form">
              <SimpleSerialForm onData={::this.dataHandler}>

                <div>
                  <input id='guess' type='text' placeholder='Take a guess!' name='guess'/>
                </div>

                <div>
                  <button className="btn drop-btn" id="submit-guess">Submit</button>
                </div>

              </SimpleSerialForm>
            </div>
        </div>

        <div>
          <h1 className='status'></h1>
        </div>

        {/*<button className="btn drop-btn" id="next-pic" onClick={::this.nextPicHandler}>Next Pic</button>*/}
        <button className="btn drop-btn" id="back-bn" onClick={::this.clickHandler}>Back</button>
        <button className="btn drop-btn" id="del-bn" onClick={::this.deleteHandler}>Delete</button>

      </div>

    );
  }
}

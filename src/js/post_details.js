import React, {PropTypes, Component} from 'react';
import $ from 'jquery';
import SimpleSerialForm from 'react-simple-serial-form';

export default class PostDetails extends Component {
  static proptypes = {
    post: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
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
        else if (data.guess.toLowerCase() !== post.caption.toLowerCase()){
          $('.status').html('GUESS AGAIN!')
    }
  }
  render() {
    let {post, onBack} = this.props;
    return (
      <div>

        <div className="post-det-header">
          <h1>Guess The Caption</h1>
        </div>
        
        <img src={post.imgURL} alt={post.title}/>
        
        <h2>Type here:</h2>
        <h2 className='caption unsolved'>{post.caption}</h2>
        
        <SimpleSerialForm onData={::this.dataHandler}>
          <input type='text' placeholder='Take a guess!' name='guess'/>
          <button className="btn drop-btn" id="submit-guess">Submit</button>
        </SimpleSerialForm>
        
        <div>
          <h1 className='status'></h1>
        </div>

        <button className="btn drop-btn" onClick={::this.clickHandler}>Back</button>

      </div>

    );
  }
}

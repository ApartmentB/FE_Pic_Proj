import React, {PropTypes, Component} from 'react';

export default class PostDetails extends Component {
  static proptypes = {
    post: PropTypes.object
  }
  render() {
    let {post} = this.props;
    return (
      <div>
        <button>Back</button>
        <img src={post.url} alt={post.title}/>
        <h2>Guess the caption:</h2>
        <h2>{post.caption}</h2>
        <input type='text' placeholder='Take a guess!'/>
        <button>GUESS</button>
        <div>
          <h1>Status of post</h1>
        </div>
      </div>

    );
  }
}

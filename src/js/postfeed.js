import React, {PropTypes, Component} from 'react';

export default class PostFeed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  }
  populate(post){
    let {onSelect} = this.props
    return (<li key={post.imgURL} onClick={onSelect.bind(null, post)}>
           <img src={post.imgURL} alt={post.caption}/>
           {post.solved}
           </li>
         )
       }
  render() {
    let {posts} = this.props;
    return (

      <div>

        <div className="feed-header">
          <h1>All Posts</h1>
        </div>

        <div className="posts-array">
        <div>{posts.map(::this.populate)}</div>
        </div>

      </div>

    );
  }
}

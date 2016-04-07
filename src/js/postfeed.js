import React, {PropTypes, Component} from 'react';

export default class PostFeed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  }
  populate(post){
    let {onSelect} = this.props
    return (<li onClick={onSelect.bind(null, post)}>
           <img src={post.imgURL} alt={post.caption}/>
           {post.status}
           </li>
         )
       }
  render() {
    let {posts} = this.props;
    return (
      <div>
        {posts.map(::this.populate)}
      </div>
    );
  }
}
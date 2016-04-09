import React, {PropTypes, Component} from 'react';
import {ajax} from 'jquery';

export default class PostFeed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  }
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  getPosts(){
    let url = 'https://tranquil-garden-21235.herokuapp.com/posts';
    setInterval(
      ajax(url).then(posts) => {
        this.setState({
          posts: [posts]
        })
      }
    )
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
    let {posts} = this.state;
    return (
      <div>
        {posts.map(::this.populate)}
      </div>
    );
  }
}

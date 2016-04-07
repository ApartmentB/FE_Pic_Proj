// Javascript Entry Point
import React from 'react';
import {render} from 'react-dom';
import {ajax} from 'jquery';
import Home from './home';
import Register from './register';
import Dashboard from './dashboard';
import CreatePost from './create_post';
import Instructions from './instructions';
import PostDetails from './post_details';
import PostFeed from './postfeed';
import Cookies from 'js-cookie';
import tempArr from './tempArr'
function renderHome(){
render (
  <Home onRegClick={ renderRegister }/>
  ,document.querySelector('.app')
)
}
function renderInstructions(){
render (
  <Instructions/>
  ,document.querySelector('.app')
)
}
function renderRegister(){
render (
  <Register
    onRegister={regAndRender}
    onBack={renderHome}/>
  ,document.querySelector('.app')
)
}
function renderLoggedInHome(user){
  render(
    <Dashboard authUser={user}>
      <PostFeed
      posts={tempArr}
      onSelect={()=> alert('you clicked me!')}/>
    </Dashboard>
    ,document.querySelector('.app')
  )}
function renderPost(clickedPost){
  console.log(clickedPost)
  render(
  <PostDetails post={clickedPost}/>
  ,document.querySelector('.app')
)}
function regAndRender(user){

  // let newUser = new FormData();
  // newUser.append('full_name', user.full_name);
  // newUser.append('email', user.email);
  // newUser.append('user_name', user.user_name);
  // newUser.append('password', user.password);
  // // // NProgress.start();

  console.log('user', user);

  ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/register',
      type: 'POST',
      data: user,
      cache: false,
      dataType: 'json',
      // processData: false,
      // contentType: false
    }).then((resp) => {
      // NProgress.done();
      console.log(resp)
      renderLoggedInHome(resp.user);
    });
}

// renderLoggedInHome({user_name: 'Larry'});
function createAndRender(post){
console.log('post', post);
}

render(
<CreatePost onCreate={ createAndRender }/>
,document.querySelector('.app')
  )

// renderLoggedInHome({user_name: 'Larry'});

// renderHome()



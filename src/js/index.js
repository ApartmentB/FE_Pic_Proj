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

let currentUser = null;

function logIn( loginInfo ) {

ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/login',
      type: 'POST',
      data: loginInfo,
      cache: false,
      dataType: 'json'
    }).then((resp) => {
      console.log(resp.user)
      if (resp.user) {
        currentUser = Cookies.set( 'currentUser',
        resp.user, { expires: 1 })
      renderDashboard(resp.user);
      } else {
      renderHome();
      }
    });
}
function logOut(){
  Cookies.remove('currentUser')
  currentUser = null
  renderHome()
}
function renderHome(){

  if (Cookies.getJSON('currentUser')){
    currentUser = Cookies.getJSON('currentUser')
    renderDashboard(currentUser)
  }
  else{
    currentUser = null
    render(
        <Home
        onRegClick={renderRegister}
        onLogIn={logIn}/>
        , document.querySelector('.app')
    )
  }
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
function renderDashboard(user){
  render(
    <Dashboard
    authUser={user}
    onLogOut={logOut}
    onMake={renderCreate}>
      <PostFeed
      posts={tempArr}
      onSelect={()=> alert('you clicked me!')}/>
    </Dashboard>
    ,document.querySelector('.app')
  )}

function renderCreate(){
  render(
    <CreatePost onCreate={createAndRender}/>
    ,document.querySelector('.app')
  )
}
function createAndRender(post){
  //ajax post to back end//
  tempArr.push(post)
  renderDashboard(Cookies.getJSON('currentUser'))
}
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
      renderDashboard(resp);
    });
}
// Cookies.remove('currentUser')

renderHome()

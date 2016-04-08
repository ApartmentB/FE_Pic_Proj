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

var loggedInUser=null;

function logIn( loginInfo ) {

ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/login',
      type: 'POST',
      data: loginInfo,
      cache: false,
      dataType: 'json'
    }).then((resp) => {
      console.log(resp)

      if (resp) {
        loggedInUser = resp
        Cookies.set('loggedIn',
        {
          user: {
             user_name: resp.user_name,
             auth_token: resp.auth_token}
           })
      renderDashboard(resp.user);

      } else {
      renderHome(loggedIn);
      }
    });
}
function logOut(){
  loggedInUser = null
  Cookies.remove('loggedIn')
}
function renderHome(checkLoggedIn){
  loggedInUser = Cookies.getJSON(checkLoggedIn)
  if (Cookies.getJSON(checkLoggedIn)){
    renderDashboard(loggedInUser)
  }
  else{
    render (
  <Home
  onRegClick={ renderRegister }
  onLogIn={ logIn }/>
  ,document.querySelector('.app')
)}
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
    <Dashboard authUser={user} onLogOut={logOut}>
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
      renderDashboard(resp.user);
    });
}
Cookies.remove('loggedIn')

renderHome('loggedIn')
//FIXME--COMPLETE RENDER FUNC OF DASHBOARD POSTFEED
// function createAndRender(post){

// <PostFeed />
// ,document.querySelector('.app');
// }

// render(
// <CreatePost onCreate={ createAndRender }/>
// ,document.querySelector('.app')
//   )

// Cookies.set('current_user', {
//           user_name: resp.user.user_name,
//           auth_token: resp.user.auth_token
//         });

//       console.log(Cookies.getJSON('current_user')); 

// Javascript Entry Point
import React from 'react';
import {render} from 'react-dom';
import {ajax, ajaxSetup} from 'jquery';
import Home from './home';
import Register from './register';
import Dashboard from './dashboard';
import CreatePost from './create_post';
import Instructions from './instructions';
import PostDetails from './post_details';
import PostFeed from './postfeed';
import Scoreboard from './scoreboard';
import Cookies from 'js-cookie';
import tempArr from './tempArr'

//Declaring User to be on a logged in page//
let currentUser = null;
//Sends login information to back end, takes respons//
//and uses it to render the dashboardas the logged in user//
function logIn( loginInfo ) {
ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/login',
      type: 'POST',
      data: loginInfo,
      cache: false,
      dataType: 'json'
    }).then((resp) => {
      console.log(resp)
      console.log(resp.user)
      if (resp.user) {
        currentUser = resp.user;
        Cookies.set( 'currentUser',
        resp.user, { expires: 1 })
        ajaxSetup({
            headers: {
              'auth_token': currentUser.auth_token
            }
          })
        console.log(currentUser)
      renderDashboard(currentUser);
    } else{
      renderHome();
      console.log(resp)
      }
    });
}
//Clears the currentUser and Cookies to go back to the home page//
function logOut(){
  Cookies.remove('currentUser')
  currentUser = null
  ajaxSetup({
    headers: {
      'auth_token': ''
    }
  })
  renderHome()
}
//If currentUser is logged in this renders the dashboard with the currentUser//
//If the currentUser is not logged in this renders the home page//
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
//Renders a set of instructions for the game//
function renderInstructions(){
render (
  <Instructions/>
  ,document.querySelector('.app')
)}
//Renders the scoreboard page when the scoreboard button is clicked//
function renderScoreBoard(){
  render(
    <Scoreboard
    currentUser={currentUser}
    onBack={renderDashboard}
    users={[]}
    />
    ,document.querySelector('.app')
  )
}
//Renders the registration page when the Register button is clicked//
function renderRegister(){
render (
  <Register
    onRegister={regAndRender}
    onBack={renderHome}/>
  ,document.querySelector('.app')
)}
//Renders the dashboard when given a currentUser//
function renderDashboard(user){

  render(
    <Dashboard
    authUser={user}
    onLogOut={logOut}
    onMake={renderCreate}
    onUsers={getUsers}
    onScoreBoard={renderScoreBoard}>
      <PostFeed
      posts={tempArr}
      onSelect={renderPost}/>
    </Dashboard>
    ,document.querySelector('.app')
  )}
//Test Function for getting all users//
function getUsers(){
  ajax('https://tranquil-garden-21235.herokuapp.com/post').then((data)=> console.log(data))
}
//Renders the page that allows you to create a new post//
function renderCreate(){
  render(
    <CreatePost
    currentUser={Cookies.getJSON('currentUser')}
    onCreate={createAndRender}
    onCancel={renderDashboard}/>
    ,document.querySelector('.app')
  )
}
//Sends the new post information to the back end and renders the dashboard with the currentUser//
function createAndRender(postData){
  console.log(currentUser)
  //ajax post to back end//
  let post = new FormData();
  post.append('caption', postData.caption);
  post.append('title', postData.title);
  post.append('image', postData.file);
  // post.append('', )
  ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/post',
      type: 'POST',
      data: post,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
      // headers: {
      //   'auth_token': currentUser.auth_token
      // }
    }).then((resp) => {
      console.log(resp)
      if (resp.post) {
        renderDashboard(currentUser)
    };
  })
}
//Renders the actual game to be played when a post is clicked//
function renderPost(clickedPost){
  console.log(clickedPost)
  render(
  <PostDetails
  post={clickedPost}
  onBack={renderDashboard}
  currentUser={currentUser}/>
  ,document.querySelector('.app')
)}
//Sends the registration info to the back end to add the user to the data base//
//Logs in the user that just registered and renders the Dashboard with the user//
function regAndRender(user){

  // let newUser = new FormData();
  // newUser.append('full_name', user.full_name);
  // newUser.append('email', user.email);
  // newUser.append('user_name', user.user_name);
  // newUser.append('password', user.password);
  // // NProgress.start();


  ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/register',
      type: 'POST',
      data: user,
      cache: false,
      dataType: 'json',
    }).then((resp) => {
      console.log('response', resp);
      // console.log(resp.user)
      if (resp.user) {
      currentUser = resp.user;
      Cookies.set( 'currentUser',
      resp.user, { expires: 1 })
      renderDashboard(resp.user);
    };
  })
}
renderHome()

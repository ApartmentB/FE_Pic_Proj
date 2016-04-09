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
      // console.log(resp.user)
      if (resp.user) {
        currentUser = Cookies.set( 'currentUser',
        resp.user, { expires: 1 })
      renderDashboard(resp.user);
      } else {
      renderHome();
      }
    });
}
//Clears the currentUser and Cookies to go back to the home page//
function logOut(){
  Cookies.remove('currentUser')
  currentUser = null
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
    onMake={renderCreate}>
      <PostFeed
      posts={tempArr}
      onSelect={()=> alert('you clicked me!')}/>
    </Dashboard>
    ,document.querySelector('.app')
  )}
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
/*TODO: SET UP AJAX TO BACK END*/
function createAndRender(post){
  //ajax post to back end//
  tempArr.push(post)
  renderDashboard(Cookies.getJSON('currentUser'))
}
//Renders the actual game to be played when a post is clicked//
function renderPost(clickedPost){
  console.log(clickedPost)
  render(
  <PostDetails post={clickedPost}/>
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
  // // // NProgress.start();

  console.log('user', user);

  ajax({
      url: 'https://tranquil-garden-21235.herokuapp.com/register',
      type: 'POST',
      data: user,
      cache: false,
      dataType: 'json',
    }).then((resp) => {
      // console.log(resp.user)
      if (resp.user) {
      currentUser = Cookies.set( 'currentUser',
      resp.user, { expires: 1 })
      renderDashboard(resp.user);
    };
  })
}
renderHome()

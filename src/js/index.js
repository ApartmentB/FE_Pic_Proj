// Javascript Entry Point
import React from 'react';
import {render} from 'react-dom';
import {ajax} from 'jquery';
import Home from './home';
import Register from './register';
import LoggedIn from './logged_in';
import CreatePost from './create_post';

function renderHome(){
render (
  <Home onRegClick={ renderRegister }/>
  ,document.querySelector('.app')
)
}

function renderRegister(){
render (
  <Register onRegister={ regAndRender }/>
  ,document.querySelector('.app')
)
}

function renderLoggedInHome(user){
  render(
    <LoggedIn authUser={user}>
    <div>
      <img src='http://fillmurray.com/100/100'/>
    </div>
    </LoggedIn>
    ,document.querySelector('.app')
  )
}
function regAndRender(user){

  // let newUser = new FormData();
  // newUser.append('full_name', user.name);
  // newUser.append('email', user.location);
  // newUser.append('user_name', user.email);
  // newUser.append('password', user.phone);
  // // NProgress.start();

  // ajax({
  //     url: 'https://shielded-bayou-85500.herokuapp.com',
  //     type: 'POST',
  //     data: user,
  //     cache: false,
  //     dataType: 'json',
  //     processData: false,
  //     contentType: false
  //   }).then(() => {
      // NProgress.done();

      renderLoggedInHome(user);
    // });
}

// renderLoggedInHome({user_name: 'Larry'});
render(
<CreatePost onCreate={ x=> x}/>
,document.querySelector('.app')
  )



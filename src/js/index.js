// Javascript Entry Point
import React from 'react';
import {render} from 'react-dom';
import Register from './register';
import {ajax} from 'jquery';
import Home from './home';

render (
  <Home/>
  ,document.querySelector('.app')
)

let regAndRender = (user) => {

  let newUser = new FormData();
  newUser.append('full_name', user.name);
  newUser.append('email', user.location);
  newUser.append('user_name', user.email);
  newUser.append('password', user.phone);
  // NProgress.start();

  ajax({
      url: 'https://shielded-bayou-85500.herokuapp.com',
      type: 'POST',
      data: newUser,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(() => {
      // NProgress.done();
      renderLoggedInHome();
    });

  //users.push(contact);
  //renderList();
}

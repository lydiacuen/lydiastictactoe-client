'use strict';
// require the store object. We will use it to share data
// between different files
const store = require('../store');

//these do not do anything yet. But I am hoping to ask about it soon. I just want my tictactoe to work first
//How do I get it so that the home page initially does not include the other sections

// const signInPage = function (event) {
//   $('.after-sign-in').hide()
//   $('.start-game').hide()
//   $('.outcome-page').hide()
//   $('.before-sign-in').show()
// }

// const homePage = function (event) {
//   $(".after-sign-in").show();
//   $(".start-game").hide();
//   $(".outcome-page").hide();
//   $(".before-sign-in").hide();
// };

// const gamePage = function (event) {
//   $(".after-sign-in").hide();
//   $(".start-game").show();
//   $(".outcome-page").hide();
//   $(".before-sign-in").hide();
// };

// const afterGamePage = function (event) {
//   $(".after-sign-in").hide();
//   $(".start-game").hide();
//   $(".outcome-page").show();
//   $(".before-sign-in").hide();
// };

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#sign-up-success').text('Signed up successfully!');

  // remove existing classes, then add a green text-success class from bootstrap
  $('#sign-up-success').removeClass();
  $('#sign-up-success').addClass('text-success');
  $('#sign-up-success').fadeOut(8000);
  // clear (reset) all of the forms
  $('form').trigger('reset');

  console.log('responseData is', responseData);
};

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#sign-up-failure').text('Sign up failed');

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#sign-up-failure').removeClass();
  $('#sign-up-failure').addClass('text-danger');
  $('#sign-up-failure').fadeOut(8000);
  // print the error
  console.error('error is', error);
};

const signInSuccess = function (responseData) {
  // we are going to add the `user` we got back in our response's data
  // to the `store` object. So we can access the user's token
  // later in api.js
  store.user = responseData.user;
  console.log('store is', store);

  // tell the user it was successful
  $('#sign-in-success').text('Signed in successfully!');

  // remove existing classes, then add a green text-success class from bootstrap
  $('#sign-in-success').removeClass();
  $('#sign-in-success').addClass("text-success");
  $('#sign-in-success').fadeOut(8000);
  // clear (reset) all of the forms
  $('form').trigger('reset');

  // After we sign in, hide the section with the id `before-sign-in`
  $('#before-sign-in').hide();
  $('#start-game').hide();
  $('#outcome-page').hide();
  // After we sign in, show the section with the id `after-sign-in`
  $('#after-sign-in').show();

  console.log('responseData is', responseData);
};

const signInFailure = function (error) {
  // tell the user it was failure
  $('#sign-in-failure').text('Sign in failed');

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#sign-in-failure').removeClass();
  $('#sign-in-failure').addClass('text-danger');
  $('#sign-in-failure').fadeOut(8000);
  // print the error
  console.error('error is', error);
};

// const changePasswordSuccess = function (responseData) {
//   // tell the user it was successful
//   $("#movies-display").text("Changed password successfully!");

//   // remove existing classes, then add a green text-success class from bootstrap
//   $("#movies-display").removeClass();
//   $("#movies-display").addClass("text-success");

//   // clear (reset) all of the forms
//   $("form").trigger("reset");

//   console.log("responseData is", responseData);
// };

// const changePasswordFailure = function (error) {
//   // tell the user it was failure
//   $("#error-message").text("Changing passwords failed!");

//   // remove existing classes, then add a red text-danger class from bootstrap
//   $("#error-message").removeClass();
//   $("#error-message").addClass("text-danger");

//   // print the error
//   console.error("error is", error);
// };

const signOutSuccess = function (responseData) {
  // tell the user it was successful
  $('#movies-display').text('Signed Out successfully!');

  // remove existing classes, then add a green text-success class from bootstrap
  $('#movies-display').removeClass();
  $('#movies-display').addClass('text-success');
  $('#after-sign-in').hide();
  $("#start-game").hide();
  $("#outcome-page").hide();
  $('#before-sign-in').show();
  // clear (reset) all of the forms
  $('form').trigger('reset');

  console.log('responseData is', responseData);
};

const signOutFailure = function (error) {
  // tell the user it was failure
  $('#sign-out-failure').text('Sign Out Failed!');

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#sign-out-failure').removeClass();
  $('#sign-out-failure').addClass('text-danger');

  //$('#after-sign-in').hide()
  //$('#before-sign-in').show()

  // print the error
  console.error('error is', error);
};

const startNewGame = function () {
  // tell the user it was successful
  //$("#movies-display").text("Signed Out successfully!");

  // remove existing classes, then add a green text-success class from bootstrap
  //$("#movies-display").removeClass();
  $("#movies-display").addClass("text-success");
  $("#after-sign-in").hide();
  $("#start-game").show();
  $("#outcome-page").hide();
  $("#before-sign-in").hide();
  // clear (reset) all of the forms
  $("form").trigger("reset");

  //console.log("responseData is", responseData);
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  //changePasswordSuccess,
  //changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  // signInPage,
  // homePage,
  // gamePage,
  // afterGamePage
  startNewGame
};

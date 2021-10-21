'use strict';
// require the store object. We will use it to share data
// between different files
const store = require('../store');



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

const signOutSuccess = function (responseData) {
  // tell the user it was successful
  $('#movies-display').text('Signed Out successfully!');

  // remove existing classes, then add a green text-success class from bootstrap
  $('#movies-display').removeClass();
  $('#movies-display').addClass('text-success');
  $('#after-sign-in').hide();
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

  // print the error
  console.error('error is', error);
};

const startNewGameSuccess = function () {
  // tell the user it was successful
  //$("#movies-display").text("Signed Out successfully!");

  // remove existing classes, then add a green text-success class from bootstrap
  //$("#movies-display").removeClass();
  $("#start-new-game-success").addClass("text-success");
  $("#start-new-game-success").hide();
  $("#before-sign-in").hide();
  // clear (reset) all of the forms
  $("form").trigger("reset");

  //console.log("responseData is", responseData);
};

const startNewGameFailure = function(error){
	$("#start-new-game-failure").text("Start New Game  Failed!");
  $("#start-new-game-failure").removeClass();
  $("#start-new-game-failure").addClass("text-danger");
  console.error("error is", error);
}
const onWin = function(responseData){

}




module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  startNewGameSuccess,
  startNewGameFailure
};

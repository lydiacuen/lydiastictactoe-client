'use strict';

// require the getFormFields function, to get data from our forms
const getFormFields = require('../../lib/get-form-fields');

// require our api auth functions
const api = require('./api');
// require out ui functions to update the page
const ui = require('./ui');
const logic = require("./logic");
const onSignUp = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault();

  // event.target is the form that caused the 'submit' event
  const form = event.target;
  // get the data from our form element
  const formData = getFormFields(form);

  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signUp(formData)
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signUpSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault();

  // event.target is the form that caused the 'submit' event
  const form = event.target;
  // get the data from our form element
  const formData = getFormFields(form);

  // make a POST /sign-in request, pass it the email/password/confirmation
  api
    .signIn(formData)
    // if our sign in request is successful, run the signUpSuccess function
    .then(ui.signInSuccess)
    // otherwise, if an error occurred, run a signInFailure function
    .catch(ui.signInFailure);
};

const onSignOut = function () {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target;
  // get the data from our form element
  //const formData = getFormFields(form)

  // make a PATCH /change-password request, pass it the old and new passwords
  api
    .signOut()
    // if our change password request is successful, run the changePasswordSuccess function
    .then(ui.signOutSuccess)
    // otherwise, if an error occurred, run a changePasswordFailure function
    .catch(ui.signOutFailure);
};

const onStartGame = (event) => {
  event.preventDefault();
  const form = event.target;
  api
    .startGame(form)
    .then(ui.startGameSuccess, logic)
    .catch(ui.startGameFailure);
};


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame
};

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require("./auth/events");
//why do I need ui below, and is it in the right path?
const ui = require("./auth/ui");

$(() => {
  // your JS code goes here
  $("#sign-up").on("submit", authEvents.onSignUp);
  $("#sign-in").on("submit", authEvents.onSignIn);
  $("#sign-out").on("click", authEvents.onSignOut);
  $("#startGame").on("click", authEvents.onStartGame);
})

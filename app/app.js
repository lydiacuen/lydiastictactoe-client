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
  //$("#change-password").on("submit", authEvents.onChangePassword);
  $("#sign-out").on("click", authEvents.onSignOut);
  $(".create-game").on("click", authEvents.onCreateGame);
  //authEvents or gameEvents in the .creat-game?
})


// $(() => {
//   $("#sign-up").on("submit", authEvents.onSignUp);
//   $("#sign-in").on("submit", authEvents.onSignIn);
//   $("#sign-out").on("click", authEvents.onSignOut);
//   $(".new-game").on("click", authEvents.onNewGame);
//   $(".game-grid").on("click", authEvents.onGridSelection);
//   $(".modal-play-again").on("click", authEvents.onPlayAgain);
//   $(".modal-exit").on("click", ui.onExitGame);
//   $(".box").on("mouseover", authEvents.onCellHover);
//   $(".box").on("mouseout", authEvents.offCellHover);
//   $("#change-password-button").on("click", ui.onChangePassBtnClick);
//   $("#change-password").on("submit", authEvents.onChangePassword);
//   $(".choose-opponent").on("click", authEvents.onOpponentSelect);
//   $(".choose-opponent-button").on("click", ui.showOpponentOptions);
// });

// 'use strict'
// const config = require('../config')
// const store = require("../store")



// Again checking token vs created token on login, create an empty game object applied to this user
// const startGame = function () {
//   return $.ajax({
//     url: `${config.apiUrl}/games`,
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     // do you need the line below?
//     body: {}
//   })
// }




// const updateGame = function (currentToken, indexId, winValue, gameId) {
//   if (currentToken === 'X') {
//     currentToken = 'x'
//   }
//   return $.ajax({
//     url: config.apiUrl + '/games/' + gameId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: indexId,
//           value: currentToken
//         },
//         over: winValue
//       }
//     }
//   })
// }

// const getGames = function () {
//   return $.ajax({
//     url: `${config.apiUrl}/games`,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// // }

//  module.exports = {
//   startGame,
// //   updateGame,
// //   getGames,
//  };

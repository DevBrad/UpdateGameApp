var apiURL = "https://games-world.herokuapp.com";

// ================== 1 ================
function getGameList(callbackFunction) {
  fetch(apiURL + "/games", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (arrayOfGames) {
      callbackFunction(arrayOfGames);
    });
}

// AICI SE STERGE JOCUL ==========
function deleteGame(gameID, callbackFunction) {
  fetch(apiURL + "/games/" + gameID, {
    method: "DELETE",
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (apiresponse) {
      callbackFunction(apiresponse);
    });
}
//=================================

//AICI SE CREAZA UN NOU JOC============

function createGameRequest(game, callbackCreateGame) {
  fetch(apiURL + "/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: game,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (createdGame) {
      callbackCreateGame(createdGame);
    });
}
//===========================
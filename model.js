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
//definim functia
function deleteGame(gameID, callbackFunction) {
  console.log(gameID);
  fetch(apiURL + "/games/" + gameID, {
    method: "DELETE",
  })
    .then(function (r) {
      console.log(r);
      return r.text(); 
    })
    .then(function (apiresponse) {
      console.log(apiresponse);
      callbackFunction(apiresponse);
    });
}
//=================================

//AICI SE CREAZA UN NOU JOC============

function createGameRequest(gameObj, callbackCreateGame) {
  fetch(apiURL + "/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: gameObj, 
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (createdGame) {
      console.log(createdGame);
      callbackCreateGame(createdGame);
    });
}
//===========================

//AICI FACEM UPDATE LA GAME

function updateGameRequest(gameid, updatedGameObj, callbackUpdateGame) {
  fetch(apiURL + "/games/" + gameid, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: updatedGameObj,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (updatedResponse) {
      console.log(updatedResponse);
      callbackUpdateGame(updatedResponse);
    });
}
//================================

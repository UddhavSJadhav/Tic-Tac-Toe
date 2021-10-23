let board = ["", "", "", "", "", "", "", "", "", ""];
let compSym,
  playerSym = "";
let isCompMove = true,
  foundCompWinner = false;
let counterComp = 0,
  counterPlayer = 0;
const x_sym = `<div class="x-sym">
                <div class="diagonal1"></div>
                <div class="diagonal2"></div>
            </div>`;
const o_sym = `<div class="o-sym">
              <div class="circle1"></div>
              <div class="circle2"></div>
            </div>`;

function clearSlate() {
  for (var k = 1; k < 10; k++) {
    board[k] = "";
    document.getElementById(k).innerText = "";
  }
  compSym, (playerSym = "");
  isCompMove = true;
  foundCompWinner = false;
  counterPlayer = counterComp = 0;
}

function checkBoard(id) {
  if (board[id] === "") {
    return true;
  }
  return false;
}

function checkWinner(dBoard = [""]) {
  return (
    (dBoard[1] == dBoard[2] && dBoard[2] == dBoard[3] && dBoard[1] != "") ||
    (dBoard[4] == dBoard[5] && dBoard[5] == dBoard[6] && dBoard[4] != "") ||
    (dBoard[7] == dBoard[8] && dBoard[8] == dBoard[9] && dBoard[7] != "") ||
    (dBoard[1] == dBoard[4] && dBoard[4] == dBoard[7] && dBoard[1] != "") ||
    (dBoard[2] == dBoard[5] && dBoard[5] == dBoard[8] && dBoard[2] != "") ||
    (dBoard[3] == dBoard[6] && dBoard[6] == dBoard[9] && dBoard[3] != "") ||
    (dBoard[1] == dBoard[5] && dBoard[5] == dBoard[9] && dBoard[1] != "") ||
    (dBoard[3] == dBoard[5] && dBoard[5] == dBoard[7] && dBoard[3] != "")
  );
}

function checkResult() {
  if (counterPlayer == 5 || counterComp == 5) {
    document.getElementById("result").setAttribute("style", "display:block");
    document.getElementById("main").setAttribute("style", "display:none");
    document.getElementById("declaration").innerHTML = `
      <h4>Its a TIE!!!</h4>
      `;
    clearSlate();
  }
  if (checkWinner(board)) {
    document.getElementById("result").setAttribute("style", "display:block");
    document.getElementById("main").setAttribute("style", "display:none");
    if (foundCompWinner) {
      document.getElementById("declaration").innerHTML = `
      <h4>You were killed by a BOT</h4>
      `;
    } else {
      document.getElementById("declaration").innerHTML = `
      <h4>Congrats!!! the bot is crying in the corner.</h4>
      `;
    }
    clearSlate();
  }
}

function addToEdges(possibleMoves) {
  var edgeMoves = [0, 2, 4, 6, 8];
  for (var p = 1; p < possibleMoves.length; p++) {
    for (var q = 1; q < edgeMoves.length; q++) {
      if (possibleMoves[p] == edgeMoves[q]) {
        if (compSym == "x") {
          document.getElementById(possibleMoves[p]).innerHTML = x_sym;
        } else {
          document.getElementById(possibleMoves[p]).innerHTML = o_sym;
        }
        board[edgeMoves[q]] = compSym;
        isCompMove = false;
        break;
      }
    }
    if (!isCompMove) {
      break;
    }
  }
}

function compMove() {
  //get possible moves
  var possibleMoves = [""];
  for (var i = 1; i < 10; i++) {
    if (board[i] == "") {
      possibleMoves.push(i);
    }
  }

  //Go for center
  if (isCompMove) {
    for (var p = 1; p < possibleMoves.length; p++) {
      if (possibleMoves[p] == 5) {
        if (compSym == "x") {
          document.getElementById(possibleMoves[p]).innerHTML = x_sym;
        } else {
          document.getElementById(possibleMoves[p]).innerHTML = o_sym;
        }
        board[5] = compSym;
        isCompMove = false;
        break;
      }
    }
  }

  //check if comp can be winner or be losing and place symbol
  if (isCompMove) {
    for (var j = 1; j < possibleMoves.length; j++) {
      var newBoard = [];
      for (var k = 0; k < 10; k++) {
        newBoard[k] = board[k];
      }
      newBoard[possibleMoves[j]] = compSym;
      if (checkWinner(newBoard)) {
        if (compSym == "x") {
          document.getElementById(possibleMoves[j]).innerHTML = x_sym;
        } else {
          document.getElementById(possibleMoves[j]).innerHTML = o_sym;
        }
        foundCompWinner = true;
        board[possibleMoves[j]] = compSym;
        isCompMove = false;
        break;
      } else {
        newBoard[possibleMoves[j]] = playerSym;
        if (checkWinner(newBoard)) {
          if (compSym == "x") {
            document.getElementById(possibleMoves[j]).innerHTML = x_sym;
          } else {
            document.getElementById(possibleMoves[j]).innerHTML = o_sym;
          }
          board[possibleMoves[j]] = compSym;
          isCompMove = false;
          break;
        }
      }
    }
  }

  //trick
  if (isCompMove) {
    var losing = [
      [1, 9],
      [3, 7],
    ];
    for (var i = 0; i < losing.length; i++) {
      if (
        board[losing[i][0]] == board[losing[i][1]] &&
        board[losing[i][1]] != ""
      ) {
        addToEdges(possibleMoves);
      }
    }
  }

  //Go for Corners
  if (isCompMove) {
    var cornerMoves = [0, 1, 3, 7, 9];
    for (var p = 1; p < possibleMoves.length; p++) {
      for (var q = 1; q < cornerMoves.length; q++) {
        if (possibleMoves[p] == cornerMoves[q]) {
          if (compSym == "x") {
            document.getElementById(possibleMoves[p]).innerHTML = x_sym;
          } else {
            document.getElementById(possibleMoves[p]).innerHTML = o_sym;
          }
          board[cornerMoves[q]] = compSym;
          isCompMove = false;
          break;
        }
      }
      if (!isCompMove) {
        break;
      }
    }
  }

  //Go for Edges
  if (isCompMove) {
    addToEdges(possibleMoves);
  }
  counterComp++;
  checkResult();
}

function addXOsym(id) {
  if (checkBoard(id)) {
    if (playerSym == "x") {
      document.getElementById(id).innerHTML = x_sym;
    } else {
      document.getElementById(id).innerHTML = o_sym;
    }
    board[id] = playerSym;
    counterPlayer++;
    isCompMove = true;
    checkResult();
    compMove();
  }
}

function playAgain() {
  document.getElementById("result").setAttribute("style", "display:none");
  document
    .getElementById("opening-banner")
    .setAttribute("style", "display:block");
  clearSlate();
}

function setPlayer(xo) {
  if (xo) {
    playerSym = "x";
    compSym = "o";
  } else {
    playerSym = "o";
    compSym = "x";
    compMove();
  }
  document
    .getElementById("opening-banner")
    .setAttribute("style", "display:none");
  document.getElementById("main").setAttribute("style", "display:block");
}

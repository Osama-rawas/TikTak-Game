let turn = "x";
let titleTurn = document.querySelector(".titleGame");
let endCounter = 0;
let squares = [];
let win = false;
function endgame(num1 = "", num2 = "", num3 = "") {
  if (num1 != "") {
    titleTurn.innerHTML = `${squares[num1]} winner`;
    document.getElementById(`iteam${num1}`).style.background = "#2f9940";
    document.getElementById(`iteam${num2}`).style.background = "#2f9940";
    document.getElementById(`iteam${num3}`).style.background = "#2f9940";
    win = true;
    setInterval(function () {
      titleTurn.innerHTML += ".";
    }, 1000);
  }
  if (num1 === "" && win == false) {
    titleTurn.innerHTML = "Game Over";
    setInterval(function () {
      titleTurn.innerHTML += ".";
    }, 1000);
  }

  setTimeout(function () {
    location.reload();
  }, 3000);
}
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`iteam${i}`).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[2] != ""
  ) {
    endgame(1, 2, 3);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    endgame(4, 5, 6);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    endgame(7, 8, 9);
  }
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[7] != ""
  ) {
    endgame(1, 4, 7);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[5] != ""
  ) {
    endgame(5, 2, 8);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    endgame(3, 6, 9);
  }
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    endgame(1, 5, 9);
  }
  if (
    squares[3] == squares[5] &&
    squares[7] == squares[5] &&
    squares[3] != ""
  ) {
    endgame(3, 7, 5);
  }
  if (endCounter === 9) endgame();
}
function game(id) {
  let square = document.getElementById(id);

  if (
    turn === "x" &&
    square.innerHTML == "" &&
    (square.innerHTML != "X" || square.innerHTML != "O")
  ) {
    square.innerHTML = "X";
    turn = "o";
    endCounter++;
    titleTurn.innerHTML = "O";
  } else if (
    turn === "o" &&
    square.innerHTML == "" &&
    (square.innerHTML != "X" || square.innerHTML != "O")
  ) {
    square.innerHTML = "O";
    turn = "x";
    endCounter++;
    titleTurn.innerHTML = "X";
  }
  winner();
  // if (endCounter === 9) {
  //   titleTurn.innerHTML = "end";
  //   for (let i = 1; i < 10; i++) {
  //     document.getElementById(`iteam${i}`).innerHTML = "";
  //   }
  // }
}

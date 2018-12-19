document.addEventListener("DOMContentLoaded", function(){


  // take a turn

  // get squares array.
  var squares = document.getElementsByTagName("td");

  // each turn
  var counter = 0;

  // looping over to check what has been clicked.
  for (var i = 0; i < squares.length; i++) {
    var square = squares[i];

    square.addEventListener("click", function(event){
      if (this.innerHTML == "") {
        if (counter % 2 == 0) {
          this.classList.add("X");
          this.innerHTML = "X";
          counter++
        } else {
          this.classList.add("O");
          this.innerHTML = "O";
          counter++
        }
        changeTurn(counter);
        detectWin();
      }

      // remove square out of squares after clicked (just change name?)
    })
  }

  // detect win per go
  function detectWin() {
    var xo = "X";
    for (var j = 0; j < 2; j++) {
      for (var i = 0; i < 9; i+=3) {
        if ( squares[i].innerHTML  == xo
         && squares[i+1].innerHTML == xo
         && squares[i+2].innerHTML == xo) {
          displayWin(xo)
          console.log("Hello");
        }
      }
      for (var i = 0; i < 3; i++) {
        if (squares[i].innerHTML   == xo
         && squares[i+3].innerHTML == xo
         && squares[i+6].innerHTML == xo) {
          displayWin(xo);
        }
      }
      if (squares[0].innerHTML == xo
       && squares[4].innerHTML == xo
       && squares[8].innerHTML == xo) {
        displayWin(xo);
      }
      if (squares[2].innerHTML == xo
       && squares[4].innerHTML == xo
       && squares[6].innerHTML == xo) {
        displayWin(xo);
      }
      xo = "O";
      if (counter == 9) {
      document.getElementsByClassName('playerTurn')[0].innerHTML = "It's a draw!";
      }
    }
  }

  function displayWin(xo) {
      document.getElementsByClassName('playerTurn')[0].innerHTML = xo + " wins!";

  }

  function changeTurn(counter) {
    if (counter % 2 == 0) {
      document.getElementsByClassName('playerTurn')[0].innerHTML = "It is X's turn";
    } else {
      document.getElementsByClassName('playerTurn')[0].innerHTML = "It is O's turn";
    }

  }


  // reset board
  var emptyboard = document.getElementById('reset');
  emptyboard.addEventListener("click", function(event){
    for (var i = 0; i < squares.length; i++) {
      document.getElementsByTagName("td")[i].innerHTML = "";
      document.getElementsByTagName("td")[i].className = "";
      document.getElementsByClassName('playerTurn')[0].innerHTML = "It is X's turn";
      counter = 0;
    }
  })






})

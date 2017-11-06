$(function(event) {
  console.log('DOM is ready');

  //reset button has to return to original variables (if I declare global variables, will have to call them again, follow calculator logic)
  //var count will be counting everytime a button is clicked, if it reaches 9, we will have a tie
  var moveOne = true;
  var moveTwo = false;
  var count = 1;
  var conditionsArray = [];
  var winningConditions = [[2,4,6], [6,7,8], [0,1,2], [0,4,8], [3,4,5], [0,3,6], [2,5,8], [1,4,7]];


  // function to randomly obtain X or O
  function xOrO() {
    if (Math.floor(Math.random() * 2) < 1) {
      console.log('X');
      return 'X';
    } else {
      console.log('O');
      return 'O';
    }
  }
  var input = xOrO();



  $('td').on('click', function(){
    conditionsArray.push($(this).attr('data-num'));
    console.log(conditionsArray);
    console.log("I've been clicked");
    $(this).html(input);
    if (input === 'X') {
      $(this).addClass('X');
    } else {
      $(this).addClass('O');
    }
    count ++;
  })
  // debugger


  // for each click, store the data-num into an array
  function winningOptions() {
    //store click button information into an array
    $('td').each(function(index, square){
      var conditions = [];
      conditions.push($(this).attr('data-num'));
      console.log(conditions);
    })
  }
  winningOptions();

});




//   if (conditions = true) {
//     alert ('Victoriaaaa');
//   } else if ( count === 9 ) {
//     alert ("It's a tie!")
//   }
// });




// Daniel's code, this code changes between player one and two either if the counter is even or odd
// var oMoves = [];
// var xMoves = [];
// function listeners() {
//   $('td').click(function(event){
//     counter ++;
//     if (counter % 2 === 0) {
//       $(this).addClass('X').html("X");
//       xMoves.push($(this).attr('data-num'));
//       console.log("--- x", xMoves);
//       checkForWin(xMoves);
//     } else {
//       $(this).addClass('O').html("O");
//       oMoves.push($(this).attr('data-num'));
//       console.log("--- o", oMoves);
//     }
//   })
// }


//looping through all the winningOptions ---- this is part of the solution code Richard explained on the board, var and function names do not apply to my code
// function checkForWin(movesArray, name) {
//   checkForFullBoard
//   $winningOptions.each(function(index, options) {
//     winCounter = 0;
//     $(combination).each(function(index, number) {
//       //this is where we check if the number we got matches with the ones in the array of arrays
//       if (movesArray.indexOf(number) !== -1 ) {
//         winCounter++;
//       }
//       if (winCounter === 3) {
//         alert("Game Over" + name + " wins!");
//         resetBoard();
//       }
//     })
//   })
// }

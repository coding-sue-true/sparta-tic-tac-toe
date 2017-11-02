$(function(event) {
  console.log('DOM is ready');

//reset button has to return to original variables (if I declare global variables, will have to call them again, follow calculator logic)
//var count will be counting everytime a button is clicked, if it reaches 9, we will have a tie
  var player = true;
  var count = 1;


// use Math.floor(Math.random), to get X or O -------------- I can also use a variable that goes between the 2 values

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
    console.log("I've been clicked");
    $(this).html(input);
    if (input === 'X') {
      $(this).addClass('X');
    } else {
      $(this).addClass('O');
    }

  })

// 
// function game() {
//   while (true) {
//
//   }
// }


// if (count === 9) {
//  alert("It's a tie!");
// }

//winning options

//
// funtion winning
//
//
//
//
//
// var winningOptions = [[2,4,6], [6,7,8], [0,1,2], [0,4,8], [3,4,5], [0,3,6], [2,5,8], [1,4,7]];
//
// if (winningOptions = true) {
//   alert ('Victoriaaaa');
// } else if ( === 9 ) {
//   alert ("It's a tie!")
// }




});

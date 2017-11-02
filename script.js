$(function(event) {
  console.log('DOM is ready');

  //reset button has to return to original variables (if I declare global variables, will have to call them again, follow calculator logic)
  //var count will be counting everytime a button is clicked, if it reaches 9, we will have a tie
  var moveOne = true;
  var moveTwo = false;
  var count = 1;


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


  //
  $('td').on('click', function(){
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
      $(this).attr('data-num');
      var conditions = [];
    });
  }
  winningOptions();




  //Array of winning options
  var conditions = [[2,4,6], [6,7,8], [0,1,2], [0,4,8], [3,4,5], [0,3,6], [2,5,8], [1,4,7]];

  if (conditions = true) {
    alert ('Victoriaaaa');
  } else if ( count === 9 ) {
    alert ("It's a tie!")
  }
});

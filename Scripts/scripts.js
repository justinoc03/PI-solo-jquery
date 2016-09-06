console.log('Hey Dev & Millie, JS is sourced');

var redBlockCount = 0;
var yellowBlockCount = 0;
var greenBlockCount = 0;
var blueBlockCount = 0;

$(document).ready(function(){
  console.log('Oh yeah, JQuery is also sourced');

  ////////////////////Color Buttons/////////////////////////////////////////
  $('#redButton').on('click',function(){
    console.log('in red button click');
    redBlock();
  });

  $('#yellowButton').on('click',function(){
    console.log('in yellow button click');
    yellowBlock();
  });

  $('#greenButton').on('click',function(){
    console.log('in green button click');
    greenBlock();
  });

  $('#blueButton').on('click',function(){
    console.log('in blue button click');
    blueBlock();
  });
});

/////////////////Display Blocks & Color Count on DOM/////////////////////////////////////
//redBlock!
var redBlock = function(){
  console.log('in redBlock');

  redBlockCount++;
  console.log(redBlockCount);

  var redDisplay = 'Total Red: ' + redBlockCount;
  var redBlockDisplay = '<div class="red color-cube"></div>';

  $('#red').html(redDisplay);

  $('.container').append(redBlockDisplay).insertAfter('.container');

  // console.log( 'in redBlock attribute', $( this ).attr( 'redButton' ) );

};

//yellowBlock!
var yellowBlock = function(){
  console.log('in yellowBlock');
  yellowBlockCount++;
  console.log(yellowBlockCount);

  var yellowDisplay = 'Total Yellow: ' + yellowBlockCount;
  var yellowBlockDisplay = '<div class="yellow color-cube"></div>';

  $('#yellow').html(yellowDisplay);

  $('.container').append(yellowBlockDisplay).insertAfter('.container');

};

//greenBlock!
var greenBlock = function(){
  console.log('in greenBlock');
  greenBlockCount++;
  console.log(greenBlockCount);

  var greenDisplay = 'Total Green: ' + greenBlockCount;
  var greenBlockDisplay = '<div class="green color-cube"></div>';

  $('#green').html(greenDisplay);

  $('.container').append(greenBlockDisplay).insertAfter('.container');

};

//blueBlock!
var blueBlock = function(){
  console.log('in blueBlock');
  blueBlockCount++;
  console.log(blueBlockCount);

  var blueDisplay = 'Total Blue: ' + blueBlockCount;
  var blueBlockDisplay = '<div class="blue color-cube"></div>';

  $('#blue').html(blueDisplay);

  $('.container').append(blueBlockDisplay).insertAfter('.container');

};

/////////////////Click and Remove Blocks from DOM/////////////////////////////////////

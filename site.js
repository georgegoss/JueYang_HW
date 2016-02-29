//add
function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var add = parseFloat(num1) + parseFloat(num2),
      addstring = num1 + '+' + num2 + '=' + add;

  return addstring
}
// substract
function subtract(num1, num2){
  //the goal of the function is to a string that says
  //num1 - num2 = result

  //make sure your numbers are numbers, no string
  var subtract = parseFloat(num1) - parseFloat(num2),
      subtractstring = num1 + '-' + num2 + '=' + subtract;

  return subtractstring
}
// multiply
function multiply(num1, num2){
  //the goal of the function is to a string that says
  //num1 * num2 = result

  //make sure your numbers are numbers, no string
  var multiply = parseFloat(num1) + parseFloat(num2),
      multiplystring = num1 + '*' + num2 + '=' + multiply;

  return multiplystring
}
// divide
function divide(num1, num2){
  //the goal of the function is to a string that says
  //num1 / num2 = result

  //make sure your numbers are numbers, no string
  var divide = parseFloat(num1) + parseFloat(num2),
      dividestring = num1 + '/' + num2 + '=' + divide;

  return dividestring
}
// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var input1=document.getElementById('first').value;
  var input2=document.getElementById('second').value;
  var output=operation(input1, input2);
        document.getElementbyId('result').innerText += output;
  // hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it

  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers

  // remember the parameter operation is a function,
  // it needs its own arguments
}

// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};



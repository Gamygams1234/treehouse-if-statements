// declare program variables

// announce the program
alert("Let's do some math!");
var num1;
var num2;

// collect numeric input
function checkNum1() {
  num1 = prompt("Please type a number");
  num1 = parseFloat(num1);
  if (Number.isNaN(num1)) {
    checkNum1();
  } else {
    checkNum2();
  }
}

function checkNum2() {
  num2 = prompt("Please type another number which is not zero");
  num2 = parseFloat(num2);
  if (Number.isNaN(num2)) {
    checkNum2();
  } else if (num2 == 0) {
    checkNum2();
  }
}
checkNum1();

// build an HTML message
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + num1 * num2;
message += "<br>";
message += num1 + " / " + num2 + " = " + num1 / num2;
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

// write message to web page
document.write(message);

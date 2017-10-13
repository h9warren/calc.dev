
// Arrays for calculations
var enteringNum = [];
var arrayOne = [];
var arrayTwo = [];

// Creating number keys
var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(){
// Clears display to enter new number
    if (enteringNum.length ==0) {
      calculator.left.value = "";
      enteringNum.push(this.value);
      calculator.left.value += this.value;
      console.log(enteringNum);
    } else {
      enteringNum.push(this.value);
      calculator.left.value += this.value;
      console.log(enteringNum);
    }
  });
};
// Creating operator keys
var operators = document.getElementsByClassName("operator");
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(){
    arrayOne.push(calculator.left.value);
    arrayTwo.push(this.value);
    console.log(arrayOne);
    console.log(arrayTwo);
    calculate();

  });
};
var equalKey = document.getElementById('equals');
  equalKey.addEventListener('click', function(){
    arrayOne.push(calculator.left.value);
    equals();
  })

//Clear key is special
var clearKey = document.getElementById('clear');
clearKey.addEventListener('click', function(){
  arrayOne = [];
  arrayTwo = [];
  calculator.left.value = 0;
  enteringNum = [];
});

function add(num1, num2) {
  var sum = parseFloat(num1) + parseFloat(num2);
  return sum;
}
function sub(num1, num2) {
  var dif = parseFloat(num1) - parseFloat(num2);
  return dif;
}
function divide(num1, num2) {
  var quotient = parseFloat(num1) / parseFloat(num2);
  return quotient;
}
function mult(num1, num2) {
  var product = parseFloat(num1) * parseFloat(num2);
  return product;
}


function calculate() {
  if (arrayOne.length == 1) {
        calculator.left.value = arrayOne[0];
        enteringNum = [];
  }
  else if (arrayTwo.length == 2) {
          if ((arrayTwo[0]== "+") && (arrayTwo[1] == '+' || arrayTwo[1] == "-" )) {
          var result = add(arrayOne[0], arrayOne[1]);
          arrayOne.push(result);
          arrayOne.splice(0,2);
          arrayTwo.shift();
          calculator.left.value = arrayOne[0];
          enteringNum = [];
        } else if ((arrayTwo[0]== "-") && (arrayTwo[1] == '+' || arrayTwo[1] == "-")) {
          var result = sub(arrayOne[0], arrayOne[1]);
          arrayOne.push(result);
          arrayOne.splice(0,2);
          arrayTwo.shift();
          calculator.left.value = arrayOne[0];
          enteringNum = [];
        } else if (arrayTwo[0]== "÷") {
          var result = divide(arrayOne[0], arrayOne[1]);
          arrayOne.push(result);
          arrayOne.splice(0,2);
          arrayTwo.shift();
          calculator.left.value = arrayOne[0];
          enteringNum = [];
        } else if (arrayTwo[0]== "*") {
          var result = mult(arrayOne[0], arrayOne[1]);
          arrayOne.push(result);
          arrayOne.splice(0,2);
          arrayTwo.shift();
          calculator.left.value = arrayOne[0];
          enteringNum = [];
        } else if ((arrayTwo[0]== "+") && (arrayTwo[1] == '÷' || arrayTwo[1] == "*")) {
          enteringNum = [];
          calculator.left.value = arrayOne[1];
        } else if ((arrayTwo[0]== "-") && (arrayTwo[1] == '÷' || arrayTwo[1] == "*")) {
          enteringNum = [];
          calculator.left.value = arrayOne[1];
        }
      } else if (arrayTwo.length == 3) {
        if ((arrayTwo[1] == "*") && (arrayTwo[2] == '÷' || arrayTwo[2] == "*")) {
          var result = mult(arrayOne[1], arrayOne[2]);
          arrayOne.push(result);
          arrayOne.splice(1,2);
          arrayTwo.splice(1,1);
          calculator.left.value = arrayOne[1];
          enteringNum = [];
        } else if ((arrayTwo[1] == "÷") && (arrayTwo[2] == '÷' || arrayTwo[2] == "*")) {
          var result = divide(arrayOne[1], arrayOne[2]);
          arrayOne.push(result);
          arrayOne.splice(1,2);
          arrayTwo.splice(1,1);
          calculator.left.value = arrayOne[1];
          enteringNum = [];
        } else if ((arrayTwo[1] == "*") && (arrayTwo[2] == '+' || arrayTwo[2] == "-")) {
          var result = mult(arrayOne[1], arrayOne[2]);
          arrayOne.push(result);
          arrayOne.splice(1,2);
          arrayTwo.splice(1,1);
          calculator.left.value = arrayOne[1];
          enteringNum = [];
          var op = arrayOne[0];
          console.log(arrayOne);
          console.log(arrayTwo);
          nextStep(op);
        } else if ((arrayTwo[1] == "÷") && (arrayTwo[2] == '+' || arrayTwo[2] == "-")) {
          var result = divide(arrayOne[1], arrayOne[2]);
          arrayOne.push(result);
          arrayOne.splice(1,2);
          arrayTwo.splice(1,1);
          calculator.left.value = arrayOne[1];
          enteringNum = [];
          var op = arrayOne[0];
          console.log(arrayOne);
          console.log(arrayTwo);
          nextStep(op);
      }
    }
    };

    function nextStep(op) {
      if (op = "+") {
        var result = add(arrayOne[0], arrayOne[1]);
        arrayOne.push(result);
        arrayOne.splice(0,2);
        arrayTwo.shift();
        calculator.left.value = arrayOne[0];
        console.log(arrayOne);
        console.log(arrayTwo);
        enteringNum = [];
      } else if (op = "-") {
        var result = sub(arrayOne[0], arrayOne[1]);
        arrayOne.push(result);
        arrayOne.splice(0,2);
        arrayTwo.shift();
        calculator.left.value = arrayOne[0];
        console.log(arrayOne);
        console.log(arrayTwo);
        enteringNum = [];
    }
  };
    var numberZero = 0;
    var numberOne = 0;
    var numberTwo = 0;
    var numberThree = 0;

    function equals() {

      numberOne = calculator.left.value;

      while(arrayTwo.length > 0) {

        if (arrayOne.length == 0) {
          arrayOne = [];
          arrayTwo =[];
        } else if (arrayOne.length == 1) {
          numberOne = arrayOne[0];
          arrayOne.pop();
        } else if (arrayOne.length == 2) {

          if (arrayTwo[0] == "+") {
            console.log(arrayOne);
            numberTwo = (parseFloat(arrayOne[0]) + parseFloat(arrayOne[1]));
          } else if (arrayTwo[0] == "-") {
            numberTwo = (arrayOne[0] - arrayOne[1]);
          } else if (arrayTwo[0] == "÷") {
            numberTwo = (arrayOne[0] / arrayOne[1]);      
          } else if (arrayTwo[0] == "*") {
            numberTwo = (arrayOne[0] * arrayOne[1]);
          }
            arrayOne[0] = parseFloat(numberTwo);
            arrayOne.pop();

        } else if (arrayOne.length == 3) {

          if (arrayTwo[1] == "+") {
            numberThree = sum(parseFloat(arrayOne[1]) + parseFloat(arrayOne[2]));
          } else if (arrayTwo[1] == "-") {
            numberThree = sub(arrayOne[1] - arrayOne[2]);
          } else if (arrayTwo[1] == "÷") {
            numberThree = divide(arrayOne[1] / arrayOne[2]);      
          } else if (arrayTwo[1] == "*") {
            numberThree = mult(arrayOne[1] * arrayOne[2]);
          }
            arrayOne[1] = parseFloat(numberThree);
            arrayOne.pop();
        }

      }
      calculator.left.value = numberOne;
      enteringNum = [];
      console.log(numberOne);
    }




// else if (arrayTwo.length == 3) {
//     if ((arrayTwo[1] == "*" || arrayTwo[1] == "÷") &&
//       (arrayTwo[2] == "*" || arrayTwo[2] == "÷")) {
//
//   } else if ((arrayTwo[1] == "*" || arrayTwo[1] == "÷") &&
//     (arrayTwo[2] == "+" || arrayTwo[2] == "-")) {
//
//   } else if ((arrayTwo[1] == "+" || arrayTwo[1] == "-")) {
//
//   }
// }

// algorithm:
//define calculator with DOM
//define display with DOM
//define buttons with DOM (include values)
//let buttonValue=document.getElementsByClassName('button').value;


let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;
const displayArea = document.getElementById("display-area");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equal");
const clearButton = document.getElementById("clear");


//add function
function add(num1,num2){
    console.log('add')
    return num1 + num2;
}

//add(5,5);

//subtract function
function subtract(num1,num2){
    console.log("subtract")
    return num1-num2;
}
//subtract(7,1);

//multiply function
function multiply(num1,num2){
    console.log('multiply')
    return num1*num2;
}
//multiply(7,8);

//divide function
function divide(num1,num2){
    console.log('divide')
    return num1/num2;
}


/*operate function(num,num)
executes add, sub, multiply or divide function 
runs when the user presses the '=' key*/

function operate(num1, num2, operator) {
    switch(operator) {
      case "add":
        return add(num1, num2);
        break;
      case "subtract":
        return subtract(num1, num2);
        break;
      case "multiply":
        return multiply(num1, num2);
        break;
      case "divide":
        return divide(num1, num2);
        break;
    }
  }

 

     operators.forEach(operator =>{
        operator.addEventListener('click', function(e){
            displayArea.innerHTML=operator.value
            setOperator(operator.value);
                   
             })
    });
    
    numberButtons.forEach(number =>{
        number.addEventListener('click', function(e){
            displayArea.innerHTML=number.value
            setOperand(number.value);
        
             })
    });

    function setOperator(operator){
        if (currentOperator=null){
          currentOperator=operator;
        }else {
            return operate(Number(firstOperand),Number(secondOperand), currentOperator)
        }

    }
    function setOperand(value) {
        if (firstOperand == null) {
          firstOperand = value;
        } else {
          secondOperand = value;
        }
      }
    
  
   



//create an = button
//create an event listener for = to run operate function
equalSign.addEventListener('click', function(){
   return 
  
});


//define a clear button  event listener with a clear function
clearButton.addEventListener('click', function(){
    displayArea.innerHTML=" "
});



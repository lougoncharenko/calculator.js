// algorithm:
//define calculator with DOM
let calculator=document.querySelector('table')
console.log(calculator)
//define display with DOM
let display=document.getElementById('result');
console.log(display);
//define buttons with DOM (include values)
let buttons= document.querySelectorAll('input');
console.log(buttons);
//let buttonValue=document.getElementsByClassName('button').value;






//add function
function add(num1,num2){
    //console.log(num+num) ; works
    return num1+num2;
}

//add(5,5);

//subtract function
function subtract(num1,num2){
    //console.log(num1-num2); works
    return num1-num2;
}
//subtract(7,1);

//multiply function
function multiply(num1,num2){
    //console.log(num1*num2) works
    return num1*num2;
}
//multiply(7,8);

//divide function
function divide(num1,num2){
    //console.log(num1/num2) works with integers but not floating numbers
    return num1/num2;
}
//divide(10,2);
//divide(5/1); displays NaN; fix to show decimals

/*operate function(num,num)
executes add, sub, multiply or divide function 
runs when the user presses the '=' key*/

function calculate(a,b){
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            if (button.value==="+"){
               console.log('add');
            }if (button.value==="-"){
                console.log('subtract')
            } if (button.value==="*"){
                console.log("multiply");
            } if (button.value ==="/"){
                console.log('divide');
            } else {
                console.log(button.value)
        };
        })
    });
    
}

calculate();


//define a clear button
//define a clear function

//create an = button
//create an event listener for = to run operate function
function clear(){
    document.getElementById('clear').value = " ";
}


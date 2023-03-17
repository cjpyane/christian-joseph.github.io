/**
 * Functions:
 * 
 * 0. Functiond allow prommers to grab a block of code and manipulate by running the code whenever and how ever many times.
 * Functions are like a rcipe you havr follow that you can tweak and get a diffrent outcome.
 * 
 * 1. To use the function first is to declare/create the function and second is using the function by diffrent means.
 * 
 */
//1. Function Terms//
/*
The keyword to declare a function within Javascript is function.

*/
function (parameter1, parameter2){
//this is where you put your code goes to make the body of the function
}

//2. Parameters//
/*
parameters are the variables that are being passed through the function. 
*/

//3. Named Functions//
/*
Named functions have a name after the keyword: function and there definitions are hoisted o the top of the scope.
This allows the to me called or manipulated before they are defined.
*/
var newnum = multiply(2, 4);
console.log(newnum) //logs the multiply function call
function multiply(num1, num2){
    return num1 * num2
}
//4. Anonymous Function//
/*
anonymous functioans are functions that dont have a name.
Anonymous functions are usually being passed through by other functions. 

*/
multiply()

//5. Function expression//
/*
Function expression happen when an anonymous function is assighned to a variable.
When using Function expression you must assighn it to a variable before you may call the function.
*/
var multiply = function(num1, num2){
    return num1 * num2;
}
var sum = multiply(2, 4);// now you can log sum and get 8.

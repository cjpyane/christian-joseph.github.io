/**
 * LOOPS:
 * 
 * 0. As programmer at times we have to execute multiple blocks of code at once.
 *    Thats why there are loops to help us to do so. Loops are a built in feature of Javascript.
 *    They allow you to iterate over data which allows us to edit the data by pulling out data one iteration after another.
 *    
 * 1. There are three diffrent kinds of loops. these diffrent loops allow for acces to arrays, object, and strings. 
 *    The for loop, for-in loop, and the while loop.
 * 2. These loops have diffrent conditions that makup the syntax for the loops. 
 *    depending what loop you use is dependent on the condition.
 */

// 1. for loop //
// The for loop requires a start condition, stop condition, an a incrementing condition. //
//This loop is best for iterating over arrays //

//var i = 0 : is the start condition while declaring the index.(start when i is zero)//
//i < names.length : is the stop condition (stop when i is less than the length of name)//
//i++ : is incrementing the index by 1 each loop//
for(var i = 0; i < names.length; i++){
    console.log(names[i]) // this example loops over the names array //
}

//2. for-in loop// 
//The for-in Loop is best for looping through objects. It pulls out all the keys one after another.//

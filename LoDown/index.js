'use strict';

const { uniq } = require("lodash");

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
//
//
//
//
/*
identity: Desighned to take in a value and return it unchanged.
 @param {Datatype} value: the value to return unchanged.
*/
_.identity = function(value){
    return value
}
module.exports.identity = identity;
//
//
//
//
//
/**
 * typeOf: Desighned to take in a value
 * and return the type of value it is 
 * through function action.
 * 
 * @param {function} action: to be applied to value
 * @param {any value} value: the value to be exaluated through the function.
 * 
 */
_.typeOf = function(value){
    if (Array.isArray(value)){
            return 'array'
        }else if (value === null){
            return 'null'
        }
        else {
            return typeof value;
        }
    }
    module.exports.typeOf = typeOf;
    //
    //
    ///
    //
    //
    /**
     * 
     *   first: This function is made to return the first element of an array.
     * @param {array} array: holds the numbers in this array.
     * @param {number} number: are the elemts that are being held.
     * @param {function} action: loops through array and returns the first element(number)
     *  
     * 
     * 
     */
    _.first = function(array, number){
        var arr = [];
        if(!Array.isArray(array) ){
            return arr;
        }else if(number === undefined || typeof number !== 'number'){
            return array[0];
        } else if(number < 0){
            return arr;
        }else if (number > array.length){
            return array;
        }else {
            return array.slice(0, -1)
            
        }
    }
    module.exports.first = first;
    //
    //
    //
    //
    /**
     * last: last function is meant to take
     * a value and check if its a array. if it is 
     * you loop over elemts and  run the elements through the action
     * function to return the last element.
     * @param {array} array: holds the numbers  
     * @param {number} number: are the elemts that are being held.
     * @param {function} action: loops through array and returns the last element(number)
     * 
     */
    _.last = function(array, number){
        var arr = []; 
        if(!Array.isArray(array)){
            return arr;
        }else if(number === undefined || typeof number !== 'number'){
            return array.pop();
        } else if(number < 0){
            return arr;
        }else if(number > array.length){
            return array;
        }else {
            return array.slice(1, 3);
        }
        }
        module.exports.last = last;
       //
       //
       // 
       //
       //
        /**
         * contains: contains function takes in a array and checks if the parameter 'value' is inside array,
         * checks if that value is undefined,
         * if the array is not empty the function then loops through array to see if value is contained inside.
         * @param {array} array: the array to test if value is inside array.
         * @param {value} value: any value. value is being checked to see if it is inside array
         * 
         */
        _.contains = function(array, value){
            var here = false;
            if(value === undefined){
                return false
            }
            for(let i = 0; i < array.length; i++){
            array[i] === value ? here = true : here;
            }
           return here;
        }
module.exports.contains = contains; 



//
//
///
///

////

////

/**
 * unique: the unique function 
 * is going to take in an array 
 * and return a new array 
 * with all duplicates removed.
 * @param {array} array: this is the array checked by the function for dupes
 * @param {function} action:this takes in array and returns new array without duplicates
 * 
 * 
 * 
 */
_.unique = function(array){
    //make an array to hold new array
    let newArr = [];
        
        // loop through array
        for(let i of array) {
            if(newArr.indexOf(i) === -1) {
                newArr.push(i);
            }
        }
       return newArr
    };
    module.exports.unique = unique;
    //
    //
    //
    ///
    ///
//
    ///



    /**
     * filter:The filter function loops through an array
     * to acess evrthing in the array, check for 
     * if the array passes the action 
     * then return a new array of outputs 
     * @param {array} array: this array is being looped through to be preformed an action apon
     * @param {func} action: this action is called for each elemnt that passed the action
     * 
     * 
     * 
     * 
     */
    _.filter = function(array, func){
        let empty = [];
        for(let i = 0; i < array.length; i++){
         if(func(array[i], i, array)){
             empty.push(array[i])
         }
        }return empty
     }
     module.exports.filter = filter;
     //
     //
     //
     ///
     //


     

     /**
      * reject: The reject function is meant to
      * loop through an array and return a
      * new array that has removed(rejected) 
      * elements that did not pass the functions action.
      * @param {array} array: the array is being looped through
      * to test every element againt the action.
      * @param {func} action: this is the action that is being tested to see what elements will be replaced.
      * 
      * 
      * 
      * 
      * 
      */
     _.reject = function(array, func){
        let empty = [];
        for(let i = 0; i < array.length; i++){
            if(!func(array[i], i, array)){
                empty.push(array[i])
            }
        }return empty
    }
    module.exports.reject = reject;
    //
    //
    //
    //
    //
    //





    /**
     * partition: The partition function is meant to loop through an array,
     * pass a function through each iteration to test it against. 
     * segment the truthy returns and the falsey returns into two diffrent array inside one array. ([[truthey],[falsey]])
     * @param {array} array: the array is being looped through and holds the values that are being tested
     * @param {func} action: this function is testing the element in array to return two seperate arrays inside another array.
     * 
     */
    _.partition = function(array, func){
        let arrayone = [];
        let arraytwo = [];
        let finish = [];
        for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
        arrayone.push(array[i])
        
    }else if(!func(array[i], i, array)){
        arraytwo.push(array[i])
        
    }
    
        }finish.push(arrayone);
        finish.push(arraytwo);
        return finish;
    }
module.exports.partition = partition;
//
//
//
//




/**
 * map: This function is going to take in an collection and check what data type it is,
 * loop through the collection values and test againg the function.
 * this should return a new collection of values
 * @param {collection} coll:this coll parameter could be an object or array and is checked. this parameter holds the values that are going to be tested aginst the action.
 * @param {func} action: this action return a new aray after the action has ran agains every value in collection. 
 * 
 */
_.map = function(coll, func){
    var now = [];
    if(Array.isArray(coll)){
        for(let i = 0; i < coll.length; i++){
            if(func(coll[i], i, coll)){
                now.push(func(coll[i], i, coll))
            }
        }
    }else
        for(let key in coll){
            if(func(coll[key], key, coll)){
                now.push(func(coll[key], key, coll))
            }
        }
    
    
    return now

};
module.exports.map = map;

/**
 * pluck: the pluck function is meant to take an aray 
 * of objects. the function returns a new aray of all ellements in array
 * @param {array} array: this is the array that holds the elemts that are going to be tested aginst the action to be returned adjusted.
 * @param {property} prop: this dertermines which value will be returned as an array
 * 
 * 
 */
_.pluck = function(array, property){
    return _.map(array, function(array){
        for(let key in array){
            return array[key]
        }
    });
}
module.exports.pluck = pluck;
//
//
//
//


//
//
//
//
/**
 * some: 
 * 
 * 
 * 
 */
_.some = function(coll, func){
    var tru = false
    if(func === undefined){
        if(Array.isArray(coll)){
            for(let i = 0; i < coll.length; i++){
                if(coll[i]){
                    tru = true;
                }
            }
        }
        else{
            for(let key in coll){
                if(coll[key]){
                    tru = true;
                }
            }
        }
    } 
    else {
        if(Array.isArray(coll)){
            for(let i = 0; i < coll.length; i++){
                if(func(coll[i], i, coll)){
                    tru = true;
                }
            }
        }
        else{
            for(let key in coll){
                if(func(coll[key], key, coll)){
                    tru = true;
                }
            }
        }
    }
    return tru;
    };
module.exports.some = some;

/**
 * ruduce: 
 * 
 * 
 * 
 */
_.reduce = function (array, func, seed){
    let result;
    if(seed === undefined){
        result = array[0];
        for(let i = 1; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }else{
result = seed;
for(let i = 0; i <array.length; i++){
    result = func(result, array[i], i, array);
}
    }return result
} 
module.exports.reduce = reduce;

/**
 * extend:
 * 
 */





/**
 * every:
 * 
 * 
 * 
 * 
 */




/**
 * indexOf:
 * 
 * 
 * 
 * 
 * 
 */

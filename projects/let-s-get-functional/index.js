// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./christian-joseph.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
/*
filter
//best for problems when you are searching for items that meet a certain condition
map
// best for problems when you want to 
reduce
//best for problems 
*/
var maleCount = function(array) {
//use _.filter() to return an array of male customers
// iterate through collection and pass each item to 'test function'
// if 'test function' returns true, item is pushed to output array
let males = _.filter(array, function (customer) {
    return customer.gender === 'male';
});  // [ {male}, {male}, {male} ]
return males.length
};

var femaleCount = function(array){
    let females = _.reduce(array, function (accumulator, current) { // number f female customers | current item
        // accumulator = 0 | current = {name: 'Adele', gender: 'female'}
        if (current.gender === 'female') {
            accumulator++;
        }
        return accumulator;
    }, 0) // number of female customers
    return females;
};

var oldestCustomer = function (array) {
    let outputObject = _.reduce(array, function (accumulator, current) {
        if (accumulator.age > current.age) {
            return accumulator
        } else {
            return current
        }
    })
    return outputObject.name
};
var youngestCustomer = function (array) {
    let outputObject = _.reduce(array, function (accumulator, current) {
        if (accumulator.age < current.age) {
            return accumulator
        } else {
            return current
        }
    })
    return outputObject.name
};

var averageBalance = function (array) {
    var outputTotal = _.reduce(array, function (accumulator, current) {
        var adjustedCurrentBalance = '';
        for (let i = 0; i < current.balance.length; i++) {
            if (current.balance[i] !== '$' && current.balance[i] !== ',') {
                adjustedCurrentBalance += current.balance[i];
            }
        }
        return accumulator += Number(adjustedCurrentBalance)
    }, 0)
    return outputTotal / array.length
};
   

var firstLetterCount = function (array, letter) {
    let number = _.reduce(array, function (accumulator, current) {
        if (current.name[0].toUpperCase() === letter.toUpperCase()) {
            accumulator++
        }
        return accumulator;
    }, 0);
    return number;
};

var friendFirstLetterCount = function (array, customer, letter) {
    var number = _.reduce(array, function (accumulator, current) {
        if (current.name === customer) {
            accumulator += firstLetterCount(current.friends, letter)
        }
        return accumulator
    }, 0)
    return number
};

var friendsCount = function (array, name) {
    var outputArray = _.reduce(array, function (accumulator, current) {
        if (_.contains(_.pluck(current.friends, 'name'), name)) {
            accumulator.push(current.name)
        }
        return accumulator
    }, [])
    return outputArray;
};

var topThreeTags = function (array) {
    var uniqueTagsObject = _.reduce(array, function (accumulator, current) {
        for (let i = 0; i < current.tags.length; i++) {
            if (!accumulator[current.tags[i]]) {
                accumulator[current.tags[i]] = 1;
            } else {
                accumulator[current.tags[i]]++
            }
        }
        return accumulator;
    }, {});
    var sortedArray = Object.values(uniqueTagsObject).sort()
    var reverseSortedArray = sortedArray.reverse();
    var topIndex = _.reduce(Object.values(uniqueTagsObject), function (accumulator, current, index) {
        if (current === reverseSortedArray[0] && accumulator[0] === undefined) {
            accumulator[0] = index;
        } else if (current === reverseSortedArray[1] && accumulator[1] === undefined) {
            accumulator[1] = index;
        } else if (current === reverseSortedArray[2] && accumulator[2] === undefined) {
            accumulator[2] = index;
        }
        return accumulator;
    }, [])

    var topTagArray = [];
    topTagArray[0] = Object.keys(uniqueTagsObject)[topIndex[0]]
    topTagArray[1] = Object.keys(uniqueTagsObject)[topIndex[1]]
    topTagArray[2] = Object.keys(uniqueTagsObject)[topIndex[2]]
    return topTagArray;
}
;

var genderCount = function (array) {
    var outputObject = _.reduce(array, function (accumulator, current) {
        if (!accumulator[current.gender]) {
            accumulator[current.gender] = 1;
        } else {
            accumulator[current.gender]++
        }
        return accumulator
    }, {})
    return outputObject
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

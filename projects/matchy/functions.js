/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { upperFirst } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (animals, string,){
    for(let i = 0; i < animals.length; i++){
    if(animals[i].name === string){  
return animals[i]
    } 
    } return null
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement){
   for(let i = 0; i < animals.length; i++){
    if(animals[i].name === name){
        animals[i] = replacement;
    }
   }

};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
    if(animals[i].name === name){
            animals.splice(name)
        }
    }
};

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    if ((animal.name.length > 0) && (animal.species.length > 0)) {
        for(let i = 0; i < animals.length; i++){  
            if(animal.name !== animals[i].name){
                animals.push(animal);
             
            }
          
            
        }
    } return;

};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

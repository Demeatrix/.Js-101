"use strict"; // treat all JS code as newber function

// alert("What the ...") we are using node js and not browser

let name = "shubh" // string
let age = 18
let isLogeeinIn = true


// number => 2 to power 53
// bigint
// string ""
// boolean => true/false
// null - standalone value
// undefined => variable is deckared but no value is assigned to it
// symbol => unique 

// object => 

console.log(typeof null)

console.log(typeof undefined)

//Primitive - 

//Referenced - Arrays, Functions, object

const legends = ["Leo Messi", "Luis SUarez", "Andres Iniesta", "Xavi"]

 let object = {
    name: "Shubh",
    age : 22
}


let myfunc = function(){
    console.log("Hello World");
}

console.log(typeof myfunc);

// STack - Primitive 
// Heap - Non Primitive

let club = "Barcelona"
let anotherClub = "Man City"

anotherClub = "Real Madrid"

console.log(club);
console.log(anotherClub);

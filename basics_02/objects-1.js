// Singlenton ---> whenever an object is constructed using constructor then it's an singleton object

// If an object is created using literals then it wont be an singleton object

// Object literals  --> declare an object

// Object.create -------------> This is the method of creating an singleton object

// Interview Ques
// ---> Take a symbol, add it into the keys of an object and print it

const mysmbl = Symbol("key1")

const jsUser = {
    name : "Shubh",
    // mysmbl : "mykey1",  /* ---> it works but it's type is a string and not Symbol */
    [mysmbl] : "mykey1",
    age : 22,
    location : "Spain",
    isLoggedIn : true
}    


// console.log(jsUser.isLoggedIn)
// console.log(jsUser.age)
// console.log(jsUser['location'])  /*-----------> another way of declaring object */
// console.log(typeof jsUser['mysmbl'])  /*-----------> gives string  as an output */
// console.log(jsUser[mysmbl])  /*-----------> gives symbol value as an output */


jsUser.isLoggedIn = false   /* Manipulation */ 

Object.freeze(jsUser.mysmbl)  /* COnstant value, cannot be changed*/

jsUser.greet = function() {
    console.log("HI hello Visca Barca");
}

jsUser.greetTwo = function() {
    console.log(`HI hello Visca Barca, ${this.age}`);    /* string interpolation (``) ---> backticks */
}

// console.log(jsUser.greet);   /* Return the reference of the fucntion and not */

console.log(jsUser.greet());
console.log(jsUser.greetTwo());
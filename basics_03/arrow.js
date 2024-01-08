//  This refers to the current context

const user = {
    username : "shubh",
    registrationFees : 299,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to the course`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"  /* Possible because we have not hardcoded the username in the object */
// user.welcomeMessage()

// on console console.log(this) will give a global object window
// here it will give an empty Object


// function Tea() {
//     let username = "Shubh"
//     console.log(this.user);
// }

// Tea()

// In functions we cannot use this, using this will result into undefined as the output

const coffee = () => {
    let username = "Shubh"
    console.log(this.username);
}

// Arrow function --> remove function keyword and add an arrow sign 
//  Will result into undefined only

// coffee()

// let addTwo = (num1, num2) => {
//     return num1 + num2
// }

// let addTwo = (num1, num2) => num1 + num2

// let addTwo = (num1, num2) => (num1 + num2)

// let addTwo = (num1, num2) => ({ username : "shubh"})

console.log(addTwo(5, 8));

//  IF wrapped inside curly braces then need to write the return keyword   ---> explicit return
// If wrapped inside parantheses then no need to write the return keyword  ---> implicit return 
// If you want to define an object you need to wrap it inside curly braces  
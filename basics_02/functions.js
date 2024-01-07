function sayMyName() {
    console.log("Hi");
}

// sayMyName()   /* Reference of the Function/ execution of the function */

// function addTwoNum(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNum(number1, number2) {
    let result = number1 + number2
    return result
}

// addTwoNum(3, 7)
// addTwoNum(3, "4")

const result = addTwoNum(8, 4)
// console.log("Result", result);


function loginUser(username = "User--") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in `
}

// console.log(loginUser("Shubh"));

// console.log(loginUser(""));  ---> empty them message will be like "just logged in"

console.log(loginUser());

function calculateCartPrice(...num1) {  /* ... It's called rest and spread operator. The name is decided on it's working on the code*/
    return num1
}

console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "shubh",
    price: 299
}

function handleObject(obj) {
console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

// handleObject(user)  --> gives undefined as it does not check type-safety
handleObject({
    username: "sam",
    price: 299
})

const values = [200, 500, 800]

function returnArray(arr){
    return values[1]
}

console.log(returnArray([200, 500, 800]));

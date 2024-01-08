// Scope of a program 

var c = 300

 if(true) {   

    let num1 = 10
    const num2 = 20
    var num3 = 30   
 }

// console.log(num1); error 
// console.log(num2); error 
// console.log(num3); gives 30 as output


function one() {
    const username = "shubh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); error
    // two()
}

// one()


// -------------------------Intersting -------------------------

// console.log(addOne(5))  ---> hoisting and will give correct output

function addOne(num) {
    return num +1
}

// addTw0(5) ---> will give error, cannot do hoisting with variable function

const addTw0 = function(num) {
    return num +2 
}

// both will run properly and not give any error 
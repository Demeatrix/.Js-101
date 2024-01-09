//  Immediately invoked function expression
//  Definition -> To remove or solve the problem of global scope's variables and etc's pollution, the iife is used

// example for use of iife -> to make the connection with the DB right after the program or app starts,

function coffee() {
    console.log('DB connected');
}

coffee();

// This is named iife

(function hello() {
    console.log("DB connected");
})();


//  first parantheses for the function definiton and initiaization, ssecond for the executing the fucntion
// simple iife

( (name) => {
    console.log(`DB is connected with ${name}`);
} )("Shubh");
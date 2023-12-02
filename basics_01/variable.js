const accountId = 1441253
let accountEmail = "shubhyess@gmail.com"
var acountPass = "12345"
let account = "Vadodara" // could initialize like this but not the besy method

let accountState
// accountId = 2 // Not allowed

console.log(accountId);

/* 

prefer not to use var because of issue 
in block scope and functional scope 
*/

accountEmail = "name@gmail.com"
city = "Barcelona"

console.table({accountEmail, accountId, city, accountState})



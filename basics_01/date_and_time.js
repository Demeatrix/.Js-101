// Dates

let date = new Date()
console.log(date.toString());
// console.log(date.toDateString());  ---------> date without time 
// console.log(date.toISOString());  -----> Same output as JSON
// console.log(date.toJSON());       -----> Same output as ISOString
// console.log(date.toLocaleDateString()); -------> Exact Date without time
// console.log(date.toTimeString()); ---------> Gives real time
// console.log(date.toUTCString());  ---------> UTC format time and date

// console.log(typeof date);

let newDate = new Date(2024, 0, 24)
// console.log(newDate.toDateString());

let my_time = Date.now()
// console.log(my_time);  -------> gives time in milisecond

let myDate = new Date("2023-01-14")  
// console.log(myDate.toLocaleString());    -------> yy-mm-dd


// Interview Ques 
// console.log(Date.now());  ---------> gives time in milisecond but how to convert it into seconds 
// console.log(Math.round(Date.now()/1000))  -------------> Gives time in seconds


let Date2 = new Date()
console.log(Date2.getDay());
Date2.toLocaleString('default', {
    weekday:"narrow"
})


// const tinderUser = new Object() ----> Singleton Object

// const tinderUser = {} /* Same output but non singleton object */
// tinderUser.id = "abc123"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = true


// console.log(tinderUser);


const regularUser = {
    id : 123,
    email : "shubh@microsoft.com",
    fullname : {
        userFullName : {
            firstName : "Shubh",
            lastName : "Khoda"
        }
    }
}

// console.log(regularUser.fullname?.userFullName.lastName);


const obj1 = {
    string : "abc",
    id : 123
}

const obj2 = {
    string : "def",
    id : 1234
}

const obj3 = Object.assign({}, obj1, obj2)

// 

const course = {
    courseName : "js in hindi",
    price : "0.00",
    courseInstructor : "Shubh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course  /* Object Destructuring*/ 

// console.log(courseInstructor);
console.log(instructor);

// API's ---> some values that comes in form of JSON format from the server or backend

// {
//     "name" : "Shubh",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }



// [
//     {},
//     {},
//     {}
// ]  -----> sometimes data aslo comes in the form of array of objects


//  To understand JSON data, use tools like JSON formatter



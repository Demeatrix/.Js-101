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

// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// for (const numer of arr) {
//     console.log(numer);
// }

const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

const map = new Map()
map.set('IN', "India")
map.set('ES', "Spain")
map.set('UK', "United Kingdom")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObj = {
    'game': "NFS",
    "game2": "resident evil"
}


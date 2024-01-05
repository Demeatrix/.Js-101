const marvel = ["Thor", "Ironmen", "Spiderman"]

const dc = ["Flash", "Superman", "Batman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3]); --------> returns an array itself

const assemble =  marvel.concat(dc)
// console.log(assemble);

const all_heroes = [...marvel, ...dc]    /* Spread Operator spreads all the elements in the array*/
console.log(all_heroes);


// console.log(Array.isArray("Shubh")); -------------> false as its a string
// console.log(Array.from("FC Barcelona")); -------------> Returns it to an array
// console.log(Array.from({name : "Shubh"}));  ----------> Gives empty array if cannot convert to an array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));
// Arrays

const arr = [0, 1, 2, 3, 4, 5]

// console.log(arr[0]);

const myarr = new Array(1,2,3,4)
// console.log(myarr[3]);

// console.log(myarr.includes(8));
// console.log(myarr.indexOf(4));

const newArr = myarr.join()
// console.log(myarr);

// console.log(typeof newArr);  -------> return s string because join converts it into a string

// alice & splice

console.log("A", myarr);

const arrN1 = myarr.slice(1, 3);

console.log(arrN1);
console.log("B", myarr);

const arrN2 = myarr.splice(1, 3);
console.log("C", myarr);
console.log(arrN2);
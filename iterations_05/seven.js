const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => { return num + 10})

//  if scope opened then it will return undefined,
// in this case its compulsary to use return keyword to print the content

// console.log(newNums);

// CHAINING ............................

// process of using (applying ) mroe than one method to an object or variable 

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40 )

console.log(newNums);
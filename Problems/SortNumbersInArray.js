//Array.sort usually sorts by converting everything to string. that's why you need a function that you send to sort

const inputArray = [7, 2, 1, 4, 3, 6, 5];

console.log(inputArray.sort((el1, el2) => el1 - el2));
//Stock Portfolio Problem
//Given the below stock portfolio, create a function that returns an object with stock held at each end of day
//                1     2       3       4
//Facebook :     200                   400
//Google :             500     700
//Amazon :       400   200             600
//output object format {1: 0,2: 0,3: 0,4: 0}
const inputArray = [
    [{1: 200}, {4: 400}],
    [{2: 500}, {3: 700}],
    [{1: 400}, {2: 200}, {4: 600}]];
let outputObject = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

function getThatData(inputArray) {
    inputArray.forEach((object) => {
        addToList(object)
    });
    return outputObject;
}

function addToList(array) {
    let counter = 1;
    //loop for individual array
    for (let i = 0; i < array.length; i++) {
        const property = Object.getOwnPropertyNames(array[i])[0];
        let previous = array[i - 1];
        //if we have missing dates
        if (property > counter && previous !== undefined) {
            for (let key in outputObject) {
                if (key < property && key > Object.getOwnPropertyNames(array[i - 1])[0]) {
                    outputObject[key] += previous[(Object.keys(previous)[0])];
                }
            }
        }
        for (let key in outputObject) {
            if (key == property) {
                outputObject[key] += array[i][property];
            }
        }
    }
}

console.log(getThatData(inputArray));


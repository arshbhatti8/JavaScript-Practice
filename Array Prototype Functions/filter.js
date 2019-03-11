Array.prototype.myFilter = function (callback) {
    let returningArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            returningArray.push(this[i]);
        }
    }
    return returningArray;
};

let myArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const qualifyingFunction = item => item.length > 6;

console.log(myArray.myFilter(qualifyingFunction));
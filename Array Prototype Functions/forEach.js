Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }
};

let myArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const qualifyingFunction = item => item.charAt(1);

myArray.myForEach(qualifyingFunction);

console.log(myArray);
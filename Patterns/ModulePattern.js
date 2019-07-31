//This pattern is used to hide some functionality inside and only expose what you want to expose

const arshSalary = (initalSalary) => {
    let salary = initalSalary;
    function increaseSalaryInternally (raiseByAmount){
        salary += raiseByAmount;
    }

    function reduceSalaryInternally (reduceyAmount){
        salary -= reduceByAmount;
    }

    return {
        currentSalary: function () {
            return salary;
        },
        raiseSalary: function (raiseByAmount) {
            increaseSalaryInternally(raiseByAmount);
            return salary;
        },
        reduceSalary: function (reduceByAmount) {
            reduceSalaryInternally(reduceByAmount);
            return salary;
        }
    }
};

let firstYear = arshSalary(120000);

firstYear.raiseSalary(5000);

console.log(firstYear.currentSalary()); //salary is 125000
firstYear.increaseSalaryInternally(5000); //doesn't work
console.log(firstYear.currentSalary()); //salary is still 125000

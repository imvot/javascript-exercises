const add = function(...numbers) {	
    // Solution's simpler
    // Mine works with more than two numbers
    return numbers.reduce((total, nb) => total + nb, 0)
};

const subtract = function(...numbers) {
    // Same here
    return numbers
        .slice(1)
        .reduce((total, nb) => total - nb, numbers[0])
};

const sum = function(numbers) {
    // Same as in the solution
    return numbers.reduce((total, nb) => total + nb, 0)
};

const multiply = function(numbers) {
    // Does work if array is empty
    // add array.length ? ... : 0
    return numbers.reduce((total, nb) => total * nb, 1)
};

const power = function(nb, pw) {
    return nb ** pw
};

const factorial = function(nb) {
    // Same as in the solution
    if(nb == 0) return 1
    return nb * factorial(nb-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

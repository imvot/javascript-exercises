const add = function(...numbers) {	
    return numbers.reduce((total, nb) => total + nb, 0)
};

const subtract = function(...numbers) {
    return numbers
        .slice(1)
        .reduce((total, nb) => total - nb, numbers[0])
};

const sum = function(numbers) {
    return numbers.reduce((total, nb) => total + nb, 0)
};

const multiply = function(numbers) {
    return numbers.reduce((total, nb) => total * nb, 1)
};

const power = function(nb, pw) {
    return nb ** pw
};

const factorial = function(nb) {
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

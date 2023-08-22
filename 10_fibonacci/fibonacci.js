const fibonacci = function(position) {
    position = +position 
    if(position < 0) return "OOPS";
    let [a, b] = [1, 1] // Starting numbers
    let sum; 
    for(let i=1; i<position; i++) {
        sum = a + b
        a = b;
        b = sum;
    };
    return a;
}

// Do not edit below this line
module.exports = fibonacci;

const fibonacci = function(position) {
    position = +position // Required ?
    if(position < 0) return "OOPS";
    // Didn't specify 0 for position 0
    // Mine has flexible starting numbers
    // Solution kinda cheated by starting a position before(a = 0 instead of 1)
    let [a, b] = [1, 1] // Starting numbers
    let sum; 
    for(let i=1; i<position; i++) {
        // Same as in solution but with different names/method to reassign b value
        sum = a + b
        a = b;
        b = sum;
    };
    return a;
}

// Do not edit below this line
module.exports = fibonacci;

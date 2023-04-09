const sumAll = function(start, stop) {
    if(typeof(start) != "number" || typeof(stop) != "number") return "ERROR";
    if(start < 0 || stop < 0) return "ERROR";

    let sum = 0;
    if(start <= stop) {
        for(i=start; i<=stop; i++) {
            sum += i;
        }
    } else {
        for(i=start; i>=stop; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

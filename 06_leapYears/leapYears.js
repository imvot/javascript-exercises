const leapYears = function(year) {
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
    // shorter version
    // return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
    // or
    // if(year % 4 == 0) {
        // if(year % 100 != 0 || year % 400 == 0) {
            // return true;
        // }
    // }
    // return false
};

// Do not edit below this line
module.exports = leapYears;

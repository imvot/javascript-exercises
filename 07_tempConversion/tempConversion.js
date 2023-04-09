const convertToCelsius = function(farenheit) {
    return Math.round(
        ( 
            (farenheit-32)*(5/9)
        ) * 10 
    ) / 10;
    //one line statement with one parenthesis level removed would have been better
};

const convertToFahrenheit = function(celcius) {
    return Math.round(
        (
            (celcius*(9/5))+32 
        ) * 10 
    ) / 10;
    //one line statement with one parenthesis level removed would have been better
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

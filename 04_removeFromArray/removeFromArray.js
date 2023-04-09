const removeFromArray = function(array, ...toRemove /* toRemove only also works */) {
    // Not required with the spread syntax already in the arguments
    //toRemove = [...arguments];
    //toRemove.shift();
    return array.filter( value => !( toRemove.includes(value) ) );
};


// Do not edit below this line
module.exports = removeFromArray;

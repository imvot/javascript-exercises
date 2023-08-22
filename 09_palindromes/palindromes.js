const palindromes = function (text) {
    const nonLetters = /[\.,?!\ ]/g  
    return text
        .replace(nonLetters, "")
        .toLowerCase()
        .split("")
        .every((letter, index, letters) => letter == letters[letters.length - index - 1]);
};

// Do not edit below this line
module.exports = palindromes;

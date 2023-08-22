const palindromes = function (text) {
    const nonLetters = /[\.,?!\ ]/g  
    // Removing of nonLetters is good, but comparing every letter to its opposed one is overkilled
    // Reversing the string and comparing is way more straight forward
    return text
        .replace(nonLetters, "")
        .toLowerCase()
        .split("")
        .every((letter, index, letters) => letter == letters[letters.length - index - 1]);
};

// Do not edit below this line
module.exports = palindromes;

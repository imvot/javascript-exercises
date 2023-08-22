const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldestSoFar, person) => {
        const oldestYearofDeath = "yearOfDeath" in oldestSoFar ? oldestSoFar.yearOfDeath : currentYear
        const personYearofDeath = "yearOfDeath" in person ? person.yearOfDeath : currentYear
        return (oldestYearofDeath - oldestSoFar.yearOfBirth) > (personYearofDeath - person.yearOfBirth) ? oldestSoFar : person
    }, {yearOfBirth: currentYear})
};

// Do not edit below this line
module.exports = findTheOldest;

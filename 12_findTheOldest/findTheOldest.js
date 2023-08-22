const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldestSoFar, person) => {
        // seperating this into its own function would have been more clear
        const oldestYearofDeath = "yearOfDeath" in oldestSoFar ? oldestSoFar.yearOfDeath : currentYear
        const personYearofDeath = "yearOfDeath" in person ? person.yearOfDeath : currentYear
        return (oldestYearofDeath - oldestSoFar.yearOfBirth) > (personYearofDeath - person.yearOfBirth) ? oldestSoFar : person
    }, {yearOfBirth: currentYear})
};


/*
* Rewrite with a dedicated function for age
* Make people.reduce way more clear
return people.reduce((oldest, currentPerson) => getAge(oldest) > getAge(currentPerson) ? oldest : currentPerson);
function getAge(person) {
    if(! "yearOfDeath" in person) {
        return new Date().getFullYear() - person.yearOfBirth
    } 
    return person.yearOfDeath - person.yearOfBirth
}
* It doesn't need a total initial value because it just uses the first element in array
*/

// Do not edit below this line
module.exports = findTheOldest;

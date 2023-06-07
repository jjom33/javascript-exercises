

const findTheOldest = function(people) {
    var len = people.length;
    var maxAge = 0;
    var index = 0;
    for (let i=0;i<len;i++){
        let deathYear = people[i].yearOfDeath?people[i].yearOfDeath:2023;
        let age =deathYear - people[i].yearOfBirth;
        if ( age > maxAge){
            maxAge = age;
            index = i;
        }
    }
    return people[index];
};

// // Do not edit below this line
module.exports = findTheOldest;

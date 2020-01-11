function isTeenager(age) {
    if (age === undefined || isNaN(age)) return "age is not defined";
    return age >= 13 && age <= 19;
}

function sortArrayDown(arr) {
    return arr.sort((a, b) => b - a);
}

function isOddNumber(number) {
    if (isNaN(number)) return "not a number";
    return (number % 2 !== 0);
}


module.exports = {isTeenager, sortArrayDown, isOddNumber};




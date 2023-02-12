

function numberToString(myNumbers) {
    const myString = {
        1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six", 7: "sept", 8: "huit", 9: "neuf",  10: "dix",
    };
    return myNumbers.map(number1 => myString[number1]);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myString2 = numberToString(number);
console.log(myString2);

module.exports = numberToString;
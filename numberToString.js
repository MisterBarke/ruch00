

function numberToString(entiers) {
    let noms = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
    let resultat = [];

    for (let i = 0; i < entiers.length; i++) {
        if (entiers[i] >= 1 && entiers[i] <= 10) {
            resultat.push(noms[entiers[i] - 1]);
        }
    }

    return resultat;
}

let entiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberToString(entiers));
module.exports = numberToString;

//Roman numeral converter
//converting any given number into roman numerals

function convertToRoman(num) {

    let numerals = [[1000, 'M'], [900, 'CM'],[500, 'D'],
        [400, 'CD'], [100, 'C'], [90, 'XC'],
        [50, 'L'], [40, 'XL'], [10, 'X'],
        [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let result = "";

    for (let i in numerals) {
        if (num/numerals[i][0] >= 1) {
            let e = Math.floor(num/numerals[i][0]);
            num -= e*numerals[i][0];
            for (let j = 0; j < e; j++) {
                result += numerals[i][1];
            }
        }
    }
    return result;

}
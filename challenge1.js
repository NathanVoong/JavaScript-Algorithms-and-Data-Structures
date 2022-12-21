//Palindrome checker
//need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

function palindrome(str) {

    str = str.toLowerCase();
    str = str.split("");
    const regex = /[^a-zA-Z0-9]/;

    for (let i in str) {
        if (regex.test(str[i])) {
            str[i] = "";
        }
    }
    str = str.join("");

    for (let i = str.length; i > 0; i--) {
        if (str[i-1] != str[str.length-i]) {
            return false;
        }
    }
    return true;
}
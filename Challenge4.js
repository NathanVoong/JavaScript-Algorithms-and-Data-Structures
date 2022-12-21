//Telephone Number Validator
//return true for strings that look like a valid US phone number

function telephoneCheck(str) {

    const regex3 = /^1?\s?\d{3}[\s-]?\d{3}[\s-]?\d{4}$|^1?\s?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/;

    return regex3.test(str);
}
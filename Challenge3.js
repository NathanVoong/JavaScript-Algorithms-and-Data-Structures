//Caesars Cipher
//decipher a rot13 without transforming any non-alphabetic character (i.e. spaces, punctuation)

function rot13(str) {

    const regex = /[a-zA-Z]/
    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    str = str.split("")

    for (let i in str) {
        if ((regex.test(str[i]))) {
            if (a.indexOf(str[i]) >= 13) {
                str[i] = a[13-(26-a.indexOf(str[i]))]
            } else {
                str[i] = a[a.indexOf(str[i])+13]
            }
        }
    }

    str = str.join("")
    return str;
}
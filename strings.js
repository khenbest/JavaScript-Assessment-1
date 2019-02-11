// 1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair
function capitalize(str) {
    console.log(str)
    let strArr = str.split(' ')
    console.log(strArr)


    let caps = []
    for (let i = 0; i < strArr.length; i++) {
        let capitalized = strArr[i];
        if (capitalized === 'i') {
            caps.push(capitalized.toUpperCase())
        } else {
            caps.push(capitalized)
        }
    }
    return caps.join(' ')
}

// 2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function countA(str) {

    let count = 0
    let strArr = str.split('')
    console.log(strArr)

    for (let i = 0; i < strArr.length; i++) {
        let letter = strArr[i];
        if (letter === 'a' || letter === 'A') {
            console.log(count += 1)
        }
    }
}
countA()

// 3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
// I SCREAM, you SCREAM, we all SCREAM for icecream


var str = 'I scream, you scream, we all scream for icecream';

function capitalScream(str) {

    let strArr = str.split(' ')
    let upper = []
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == 'scream' || strArr[i] == 'scream,') {
            upper.push(strArr[i].toUpperCase())
        } else {
            upper.push(strArr[i])
        }
    }
    return upper.join(' ')
}
capitalScream('I scream, you scream, we all scream for icecream')
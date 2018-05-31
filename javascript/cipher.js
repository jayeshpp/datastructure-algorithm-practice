function caesarCipher(string, num) {
    num = num % 26;
    var lowerCaseString = string.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var newString = "";

    for (let i = 0; i < lowerCaseString.length; i++) {
        let currentLetter = lowerCaseString[i];
        if(currentLetter === " ") {
            newString += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = 26 + newIndex;
        if(string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }else {
            newString += alphabet[newIndex];
        }

    }

    return newString;
}

function deCaesarCipher(string, num) {
    num = num % 26;
    var lowerCaseString = string.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var newString = "";

    for(var i = 0; i < lowerCaseString.length; i++) {
        let currentLetter = lowerCaseString[i];
        if(currentLetter === " ") {
            newString += currentLetter;
            continue;
        }

        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex - num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = 26 + newIndex;
        if(string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }else { 
            newString += alphabet[newIndex];
        }
    }
   
    return newString;
}


var string = "Jayesh PP";
console.log(caesarCipher(string, 27));
console.log(caesarCipher(string, -27));
console.log(caesarCipher(string, -100)); 

let newString = caesarCipher(string, -100);
console.log(deCaesarCipher(newString, -100));
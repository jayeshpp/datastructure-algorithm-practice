function reverseString(string) {
    var newString = [];
    var string = string.split("");

    for (let index = string.length; index >= 0; index--) {
        newString.push(string[index]);
    }

    return newString.join("");
}

function reverseWord(string) {
    var newWord = [];
    var string = string.split(" ");
    
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        let newElement = element.split("");
        for (let index = newElement.length; index >= 0; index--) {
            newWord.push(newElement[index]);
        }
        newWord.push(" ")
    }

    return newWord.join("").trim();
}

console.log(reverseString("Jayesh Puthalath Poyil"));
console.log(reverseWord("Jayesh Puthalath Poyil"));
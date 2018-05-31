function isPalindrome(string) {
    string = string.toLowerCase();
    var stringArr = string.split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var letterArr = [];
    stringArr.forEach(char => {
        if(alphabet.indexOf(char) > -1) letterArr.push(char);
    });

    if(letterArr.join("") === letterArr.reverse().join("")) return true;
    else return false;
}

console.log(isPalindrome("race car"));
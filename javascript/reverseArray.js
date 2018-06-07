function reverceArrayInPlace(arr) {
    for(var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

function reverceArrayInPlace2(arr) {
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i-- ) {
        newArr.push(arr[i])
    }
    return newArr;
}

console.log(reverceArrayInPlace([1,2,3,4,5,6,7]))
console.log(reverceArrayInPlace2([10,20,30,40,50,60,70]))
console.log([10,20,30,40,50,60,70].reverse())
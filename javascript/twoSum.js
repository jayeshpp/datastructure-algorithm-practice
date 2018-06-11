function twoSum(array, sum) {
    var pairs = [];
    var hashTable = [];
    for(var i = 0; i < array.length; i++) {
        var current = array[i];
        var counterPart = sum - current;

        if(hashTable.indexOf(counterPart) !== -1) {
            pairs.push([current, counterPart])
        }
        hashTable.push(current)
    }

    return pairs;
}

console.log(twoSum([1,6,4,5,3,3], 7))
console.log(twoSum([10,36,20,42,26,4], 46))

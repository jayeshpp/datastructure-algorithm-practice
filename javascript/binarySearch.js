function binarySearch(numArr, key) {
    let array = Array.prototype.slice.call(numArr);
    array.sort(function(a, b){
        return a - b
    });

    const midIndex = Math.floor(array.length/2);
    const midItem = array[midIndex];

    if(midItem === key) {
        return true
    }else if(midItem < key && array.length > 1) {
        return binarySearch(array.splice(midIndex, array.length), key);
    }else if(midItem > key && array.length > 1) {
        return binarySearch(array.splice(0, midIndex), key);
    }else {
        return false;
    }
    
}

console.log(binarySearch([23,45,32,43,12,6,5,2,11,54,22], 665));

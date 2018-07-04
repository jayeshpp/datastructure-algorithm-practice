function bubbleSort(array) {
    for(var i = array.length; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if(array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}


console.log(bubbleSort([3,5,1,6,4,2,8,7]))
console.log(bubbleSort([-3,5,-1,6,-4,2,8,-7]))
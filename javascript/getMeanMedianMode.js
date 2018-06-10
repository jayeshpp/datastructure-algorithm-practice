function getMean(array) {
    var sum = 0;
    array.forEach(number => {
        sum += number
    });
    return sum / array.length
}

function getMedian(array) {
    array.sort();
    var median;

    if(array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    } else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2]
        median = (mid1 + mid2) / 2
    }
    return median
}

function getMode(array) {
    var modeObj = {};
    
    array.forEach(num => {
        if(!modeObj[num]) modeObj[num] = 0
        modeObj[num]++
    })
    
    var maxFequency = 0;
    var modes = [];
    for(var num in modeObj) {
        if(modeObj[num] > maxFequency) {
            modes = [ num ];
            maxFequency = modeObj[num];
        }else if(modeObj[num] === maxFequency) {
            modes.push(num);
        }
    }

    if(modes.length === Object.keys(modeObj).length) modes = [];
    
    return modes
}

function getMeanMediaMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

var arr = [9,10,23,10,23,9]
console.log(getMeanMediaMode(arr));

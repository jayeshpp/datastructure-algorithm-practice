function mergeSort(array) {
  if(array.length < 2) return array;
  var midIndex = Math.floor(array.length / 2);
  var firstHalf = array.slice(0, midIndex);
  var secondHalf = array.slice(midIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  var results = [];
  while(array1.length && array2.length) {
      var minElm;
      if(array1[0] < array2[0]) minElm = array1.shift();
      else minElm = array2.shift();
      results.push(minElm);
  }

  if(array1.length) results = results.concat(array1);
  else results = results.concat(array2);

  return results;
}

console.log(mergeSort([23,242,42,3,65,85,42,2,0,12,-43,-23,-0,5464]))
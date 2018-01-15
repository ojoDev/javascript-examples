function diffArray(arr1, arr2) {
  var newArr = (arr1.concat(arr2)).sort();
  return newArr.filter(function(currentValue, i, arr){
      return  (i===0 || arr[i]!=arr[i-1]) && (arr.length==i+1 || arr[i]!=arr[i+1]);                  
    });
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
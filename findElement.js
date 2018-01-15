function findElement(arr, func) {
  var num = 0;
  var partialArray=[];
  for (var i=0;i<arr.length;i++)
  {
    partialArray.push(arr[i]);
    if (partialArray.filter(func).length>0)
     {
       return arr[i];
     }
  }
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/*Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).*/

function dropElements(arr, func) {
var num = 0;
  var partialArray=[];
  for (var i=0;i<arr.length;i++)
  {
    partialArray.push(arr[i]);
    if (partialArray.filter(func).length>0)
     {
       arr=arr.slice(i, arr.length);
       return arr;
     }
   
  }
  return [];
}

/*dropElements([1, 2, 3], function(n) {return n < 3; });*/
/*dropElements([1, 2, 3, 4], function(n) {return n >= 3;});*/
/*dropElements([0, 1, 0, 1], function(n) {return n === 1;}); */
dropElements([1, 2, 3, 4], function(n) {return n > 5;});

/*
Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

*/
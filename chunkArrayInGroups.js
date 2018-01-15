function chunkArrayInGroups(arr, size) {
  newArray=[];
  newSubArray=[];
  num=1;
  for (var i=0;i<arr.length;i++)
   {
     
     newSubArray.push(arr[i]);
     num++;
     if (num>size)
       {
         newArray.push(newSubArray);
         newSubArray=[];
         num=1;
       }
   }
  if (newSubArray.length>0)
   {
      newArray.push(newSubArray);
   }
  // Break it up.
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
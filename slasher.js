function slasher(arr, howMany) {
  if (howMany>arr.length)
  {
    howMany=arr.length;
  } 
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2); //->[3]
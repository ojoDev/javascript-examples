function reverseString(str) {
  newStr="";
  for (var i=str.length-1;i>=0;i--)
   {
     newStr=newStr+str[i];
   }
  return newStr;
}

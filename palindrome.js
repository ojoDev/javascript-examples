function reverseString(str) {
  newStr="";
  for (var i=str.length-1;i>=0;i--)
   {
     newStr=newStr+str[i];
   }
  return newStr;
}

function palindrome(str) {
  normalizeStr= str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return normalizeStr==reverseString(normalizeStr);
}
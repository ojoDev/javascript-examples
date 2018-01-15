function repeatStringNumTimes(str, num) {
  if (num<0)
  {
    return "";
  }
  var newString="";
  for (var i=0;i<num;i++)
   {
     newString=newString+str;
   }
  return newString;
}

repeatStringNumTimes("abc", 3);
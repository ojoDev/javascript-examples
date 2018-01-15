function titleCase(str) {
  str=str.toLowerCase();
  finalStr="";
  var isFirstLetter=true;
  for (var i=0;i<str.length;i++)
   {
     car=str[i];
     if (str[i]==" ")
     {
       isFirstLetter=true;
     }
     else if (isFirstLetter) {
         car=str[i].toUpperCase();
         isFirstLetter=false;
      }
     finalStr=finalStr+car;
     }
  return finalStr;
}
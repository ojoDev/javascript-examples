  var letters=['I','V','X','L','C','D','M','L'];


  function romanFormat(num, letterPos){
   letter=letters[letterPos];
	  switch(num) {
      case 0:
          return "";
     case 1:
         return letter;
       case 2:
         return letter+letter;
       case 3:
         return letter+letter+letter;
      case 4:
         return letter+letters[letterPos+1];
       case 5:
         return letters[letterPos+1];   
        case 6:
         return letters[letterPos+1]+letter;   
        case 7:
         return letters[letterPos+1]+letter+letter;   
        case 8:
         return letters[letterPos+1]+letter+letter+letter;   
        case 9:
         return letter+letters[letterPos+2];   
     
  }}

  function convertToRoman(num) {
   var romanNum="";
    for (var i=String(num).length-1;i>=0;i--)
     {
         romanNum=romanNum+romanFormat(Math.floor(num / Math.pow(10, i)),((i+1)*2)-2) ;
         num=num-Math.floor(num /  Math.pow(10, i))*Math.pow(10, i);
     }
   return romanNum;
  }

  convertToRoman(36);
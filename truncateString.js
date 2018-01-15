function truncateString(str, num) {
 if (num>=str.length)
 {
    return str; 
 } 
  if (num>3)
  {
    num=num-3;
  }
 var newStr=str.slice(0,num);
 if (str.length>=num)
  {
    newStr=newStr.concat("...");
  }          
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
function findLongestWord(str) {
  var words=str.split(" ");
  var max=0;
  for (var i=0;i<words.length;i++)
   {
     if (max<words[i].length)
      {
        max=words[i].length;
      }
   }
  return max;
}
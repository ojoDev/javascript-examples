function isVocal(c)
{
  return c.toLowerCase()=='a'||
    c.toLowerCase()=='e'||
    c.toLowerCase()=='i'||
    c.toLowerCase()=='o'||
    c.toLowerCase()=='u';
}
function translatePigLatin(str) {
  var consonants="";
  for (var i=0;i<str.length;i++)
  {
    if (i===0 && isVocal(str.charAt(i)))
    {
      return str+"way";
    }
    if (isVocal(str.charAt(i)))
      {
        return str.substring(i)+consonants+"ay";
      }
    consonants=consonants+str.charAt(i);
  }
  return str;
}

translatePigLatin("consonant");
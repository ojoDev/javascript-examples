function findPair(letter)
{
   switch (letter)
   {       
     case 'A':return 'T';
     case 'T':return 'A';
     case 'C':return 'G';
     case 'G':return 'C';
     default:return '';
    }      
}

function pairElement(str) {
  pair=[];
  for (var i=0;i<str.length;i++)
  {
    pair.push([str.charAt(i),findPair(str.charAt(i))]);
  }
  return pair;
}

pairElement("GCG");
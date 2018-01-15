function binaryAgent(str) {
  var letters=str.split(" ");
  var word="";
  for (var i=0;i<letters.length;i++)
   {
     var digit = parseInt(letters[i], 2);
  
     word=word+String.fromCharCode(digit);
   }
  return word;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//minimo comun multiplo de los números que van de x a y (ej: 1,5 sería el mcm de 1,2,3,4,5)
function smallestCommons(arr) {
  var x;
  var y;
  var mcm=0;
  var find=false;
  if (arr[0]>arr[1])
  {
     x=arr[1];
     y=arr[0];
  }
  else
  {
    x=arr[0];
    y=arr[1];
  }
  
  mcm=0;
  
  do
  {
    mcm=mcm+y;
    for (var i=x; i<=y;i++)
    {
       if (mcm % i >0)
       {
         break;
       }
      else
        {
          if (i==y)
           {
             find=true;
           }
        }
    }
  }
  while(!find);

  return mcm;
}


smallestCommons([1,13]);

function sumPrimes(num) {
  var total=0;
  for (var x = 0; x <= num; x++)
  {
    if (isPrime(x))
     {
       total=total+x;
     }
  }
    return total;
}

function isPrime (n)
{
    if (n < 2) 
    {
      return false;
    }
    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

sumPrimes(10);

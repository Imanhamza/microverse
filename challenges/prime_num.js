function sumPrimes(num) {
  // function to check if the num is prime or not 
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0)
        return false;
    }
    return true;
  }

  // check all the num
  let sum_prime = 0;
  for(let i = 2; i <= num; i++){
    if(isPrime(i))
      sum_prime += i;
  }
  return sum_prime;
}
sumPrimes(10);

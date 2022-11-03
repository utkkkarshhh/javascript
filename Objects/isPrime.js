// Prime -> whose factors are only 1 and itself
// Compostie -> which has multiple factors


showPrimes(40);

function showPrimes(limit) {
  for(number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
      isPrime = false;
      break;
      }
    }
    if (isPrime) console.log(number);
  }
}






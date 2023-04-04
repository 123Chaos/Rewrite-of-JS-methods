function countPrime(n) {
  let isPrime = function (num) {
    let p = Math.sqrt(num);
    for (let i = 2; i <= p; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  if (n < 2) return 0;
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (i > 3 && (i % 2 === 0 || i % 3 === 0)) continue;
    if (isPrime(i)) {
      count++;
      console.log(i);
    }
  }
  return count;
}
console.log(countPrime(10));

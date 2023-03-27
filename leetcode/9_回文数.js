var isPalindrome = function (x) {
  if (x < 0 || Math.floor(x) != x) return false;
  let x2 = x,
    res = 0;
  while (x2) {
    res = res * 10 + (x2 % 10);
    x2 = Math.floor(x2 / 10);
  }
  return res === x;
};

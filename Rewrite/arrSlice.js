// [L,...,R-1]
Array.prototype.mySlice = function (L = 0, R = this.length) {
  const _arg = this;
  const _len = this.length;
  let res = [];
  if (L < 0) L = _len + L;
  if (R < 0) R = _len + R;
  for (let i = L; i < R; i++) {
    res.push(_arg[i]);
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.mySlice(-2));

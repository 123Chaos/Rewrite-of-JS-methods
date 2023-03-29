Array.prototype.myToString = function () {
  let res = "";
  const _arg = this;
  for (let i = 0; i < this.length; i++) {
    res += _arg[i];
    if (i != this.length - 1) res += ",";
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myToString());

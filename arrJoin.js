Array.prototype.myJoin = function (str = ",") {
  const _arg = this;
  const _len = this.length;
  let res = "";
  for (let i = 0; i < _len; i++) {
    res += _arg[i];
    if (i != _len - 1) {
      res += str;
    }
  }
  return res;
};

const arr = [1, 1, 2, 34, 2];
const res = arr.myJoin("");
console.log(res);

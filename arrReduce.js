Array.prototype.myReduce = function (cb, initialValue) {
  const _arg = this;
  const _len = this.length;
  const _index = initialValue ? 0 : 1;
  let res = initialValue || _arg[0];
  for (let i = _index; i < _len; i++) {
    const cur = _arg[i];
    res = cb(res, cur, i, _arg);
  }
  return res;
};

const arr = [1, 1, 2, 34, 2];
const res = arr.myReduce((x, y) => x + y);
console.log(res);

Array.prototype.myMap = function (cb = null) {
  if (cb === null) return this; // 如果啥也不传，返回数组本身
  const _arg = this;
  const _len = this.length;
  const _arg2 = arguments[1]; // 第二个参数为改变this后指向的值，可传可不传，如果不传，this默认为window
  const tar = [];
  for (let i = 0; i < _len; i++) {
    const _item = JSON.parse(JSON.stringify(_arg[i]));
    tar.push(cb.apply(_arg2, [_item, i, _arg]));
  }
  return tar;
};

const arr = [1, 1, 2, 34, 2];
const res = arr.myMap((x) => x * 2);
console.log(res);

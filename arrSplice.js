// 实例arr, 参数说明: (从arr[0]开始删除,删除元素数量,删除后在该位置插入一个或多个元素)
Array.prototype.mySplice = function (start, deleteCount = 0, ...arr) {
  // 为了代码简洁不考虑start < 0
  if (start >= this.length) return this;
  const _arg = this;
  let res = [];
  let flag = 1; // 只进一次if
  for (let i = 0; i < this.length; i++) {
    if (i >= start && flag) {
      flag = 0;
      i += deleteCount;
      for (let j = 0; j < arr.length; j++) {
        res.push(arr[j]);
      }
    }
    res.push(_arg[i]);
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.mySplice(1, 1, 1));

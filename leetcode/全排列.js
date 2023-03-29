let func = (arr) => {
  let res = [];
  let len = arr.length;
  let backtracking = (tempArr, leftArr) => {
    if (tempArr.length === len) {
      res.push(tempArr); // 数组
      //   res.push(tempArr.join("")); // 字符串
    } else {
      leftArr.forEach((item, index) => {
        let temp = [].concat(leftArr);
        temp.splice(index, 1);
        backtracking(tempArr.concat(item), temp);
      });
    }
  };
  backtracking([], arr);
  return res;
};
console.log("res:", func(["1", "2", "3"]));

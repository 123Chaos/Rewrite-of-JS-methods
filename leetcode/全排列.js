let func = (arr) => {
  let res = [];
  let backtracking = (tempArr, leftArr) => {
    if (tempArr.length === arr.length) {
      res.push(tempArr); // 数组
      //   res.push(tempArr.join("")); // 字符串
    }
    leftArr.forEach((item, index) => {
      let temp = [].concat(leftArr);
      temp.splice(index, 1);
      backtracking(tempArr.concat(item), temp);
    });
  };
  backtracking([], arr);
  return res;
};
console.log("res:", func(["1", "2", "3"]));

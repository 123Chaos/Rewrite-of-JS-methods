let p1 = new Promise((resolve, reject) => {
  resolve("Success: 01");
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Fail: 02");
  }, 1000);
});

// 全部成功返回value数组，失败返回第一个失败的返回值
let pAll = Promise.all([p1, p2]);
console.log(
  pAll.then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  )
);

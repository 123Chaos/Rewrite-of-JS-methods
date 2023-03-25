Promise.prototype.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let resultArr = [];
    let count = 0;
    let resultByKey = (value, index) => {
      resultArr[index] = value;
      if (++count === values.length) {
        resolve(resultArr);
      }
    };
    values.forEach((promise, index) =>
      promise.then((value) => {
        resultByKey(value, index);
      }, reject)
    );
  });
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.myAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

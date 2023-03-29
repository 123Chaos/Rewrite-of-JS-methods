function myPromiseRetry(promise, times, delay) {
  return new Promise((resolve, reject) => {
    function process() {
      promise
        .then((value) => resolve(value))
        .catch((reason) => {
          if (times == 0) reject(reason);
          else {
            times--;
            setTimeout(process(), delay);
          }
        });
    }
    process();
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 延时一秒");
  }, 1000);
});


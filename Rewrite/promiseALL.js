function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let counter = 0;
    for (const promise of promises) {
      Promise.resolve(promise)
        .then((value) => {
          res.push(value);
          if (++counter == promises.length) {
            resolve(res);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    }
  });
}

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let counter = 0;
    for (const promise of promises) {
      Promise.resolve(promise)
        .then((value) => {
          res.push(value);
          if (++counter === promise.length) {
            resolve(res);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    }
  });
}
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 延时一秒");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 延时两秒");
  }, 2000);
});

myPromiseAll([p1, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(reason);
  });

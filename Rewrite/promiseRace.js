function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises)
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((reason) => {
          reject(reason);
        });
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

myPromiseRace([p1, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(reason);
  });

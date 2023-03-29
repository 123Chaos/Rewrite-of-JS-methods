const promise = new Promise((resolve, reject) => {
  console.log("a");
  resolve();
  console.log("b");
});
promise.then(() => {
  console.log("c");
});
console.log("d");

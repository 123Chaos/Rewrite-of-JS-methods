function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(2);
    }, 1000);
  });
}

getData()
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(value);
        resolve(3);
      }, 2000);
    });
  })
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(value);
      }, 3000);
    });
  });

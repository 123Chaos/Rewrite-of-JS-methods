function throttled(fn, delay = 500) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        fn();
        timer = null; // 清空定时器，在setTimeout中无法删除定时器，因为还在运作，因此使用timer=null
      }, t);
    }
  };
}

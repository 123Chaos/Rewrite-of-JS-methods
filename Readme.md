# Rewrite of some functions in javaScript

- 本项目是一些js方法的重写，以及某些比较常见的算法和场景题。觉得有用的话请点一下小星星，谢谢您！
- 运行方式: 浏览器->F12->console(控制台)->复制粘贴 **OR** 安装Nodejs -> 使用node xx.js 进行运行

```js
// node mergeSort.js
function mergeSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L == R) return;
  let M = L + ((R - L) >> 1);
  process(arr, L, M);
  process(arr, M + 1, R);
  merge(arr, L, M, R);
}

function merge(arr, L, M, R) {
  let help = [];
  let i = 0;
  let p1 = L;
  let p2 = M + 1;
  while (p1 <= M && p2 <= R) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
}
let res = [1, 3, 2];
mergeSort(res);
console.log(res);

// [ 1, 2, 3 ]
```


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

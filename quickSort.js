function quicksort(arr, L, R) {
  if (L < R) {
    let v = parseInt(Math.random() * (R - L + 1) + L);
    // swap(arr, L, v)
    let tmp = arr[L];
    arr[L] = arr[v];
    arr[v] = tmp;
    let w = partition(arr, L, R);
    quicksort(arr, L, w - 1);
    quicksort(arr, w + 1, R);
    return arr;
  }
}

function partition(arr, L, R) {
  let i = L;
  let x = arr[L];
  for (let j = L + 1; j <= R; j++) {
    if (arr[j] <= x) {
      i++;
      if (i != j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  temp = arr[L];
  arr[L] = arr[i];
  arr[i] = temp;
  return i;
}
let arr = [33, 22, 11, 88, 23, 32];
arr = quicksort(arr, 0, arr.length - 1);
console.log(arr);

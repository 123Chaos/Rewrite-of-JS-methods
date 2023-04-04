a = [1, 2, { a: 2 }];
b = Object.assign({}, a);
d = Object.assign(a);
let c = [...a];
a[0] = 2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

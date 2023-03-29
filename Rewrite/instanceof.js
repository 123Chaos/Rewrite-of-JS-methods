function myInstanceof(left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if (typeof left !== "object" || left === null) return false;
  // 右侧必须是一个构造函数
  if (typeof right !== "function")
    throw new TypeError("right must be a constructor");
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  let proto = left.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true; //找到相同原型对象，返回true
    proto = Object.getPrototypeof(proto);
  }
}

let arr = new Object();
console.log(myInstanceof(arr, Object));

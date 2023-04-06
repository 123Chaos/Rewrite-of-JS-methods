function deepClone(obj = {}) {
  /** obj是null, 或者不是对象和数组，直接返回；对象和数组需要进一步拷贝对象的属性、数组的元素，通过递归实现 */
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  // 初始化返回结果
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    // 保证key不是从原型取得的属性
    if (Object.hasOwnProperty.call(obj, key)) {
      // 递归调用
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
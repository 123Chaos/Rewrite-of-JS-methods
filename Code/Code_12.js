// 解析URL，实现一个函数parseUrl使，
// parseUrl('https://www.meituan.com/index.html?a=test&b=2.1')
// 返回 {a:'test', b: 2.1}

function parseUrl(url) {
  let args = url.substr(url.indexOf("?") + 1);
  let arr = args.split("&");
  let obj = {};
  arr.forEach((el) => {
    let pos = el.indexOf("=");
    let key = el.substr(0, pos);
    let val = el.substr(pos + 1);
    if (Number.isNaN(parseFloat(val))) {
      //不是数值型咱们就不转
      obj[key] = val;
    } else {
      //否则转
      obj[key] = parseFloat(val);
    }
  });
  return obj;
}
let str = "https://www.meituan.com/index.html?a=test&b=2.1";
console.log("res ", parseUrl(str));

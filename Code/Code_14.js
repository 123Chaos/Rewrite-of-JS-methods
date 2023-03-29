// str: str_for_you
// output: strForYou
const func = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "_" && (i == 0 || i == str.length - 1)) {
      res = res + str[i];
      continue;
    } else if (str[i] == "_" && (i !== 0 || i !== str.length - 1)) {
      res = res + str[++i].toUpperCase();
      continue;
    }
    res = res + str[i];
  }
  return res;
};

console.log(func("_for_you"));
console.log(func("for_you"));
console.log(func("for_you_"));

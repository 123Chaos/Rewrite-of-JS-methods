const deepClone = function (origin, target) {
    const tar = target || {};
    const toStr = Object.prototype.toString;
    const typeArray = "[object,Array]";
    for (const k in origin) {
      if (origin.hasOwnProperty(k)) {
        if (typeof origin[k] === "object" && origin[k] !== null) {
          tar[k] = toStr.call(origin[k]) === typeArray ? [] : {};
          deepClone(origin[k], tar[k]);
        } else {
          tar[k] = origin[k];
        }
      }
    }
    return tar;
  };
  
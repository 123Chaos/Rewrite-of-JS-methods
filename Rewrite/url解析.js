function getQuery(_var) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == _var) {
      return pair[1];
    }
  }
  return false;
}

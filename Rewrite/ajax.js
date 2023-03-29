let xhr = new XMLHttpRequest();
xhr.open("get", "https://saying.api.azwcl.com/saying/get");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || this.status == 304) {
      options.success && options.success(xhr.responseText, xhr.responseXML);
    } else {
      options.error && options.error(xhr.status);
    }
  }
};

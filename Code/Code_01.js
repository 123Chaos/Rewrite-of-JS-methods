let Code_01 = function () {
  let now = +new Date();
  let last = +new Date("2023-3-29 18:30:00");
  let count = (last - now) / 1000;
  let hour = parseInt((count / 60 / 60) % 24);
  hour = hour < 10 ? "0" + hour : hour;
  let min = parseInt((count / 60) % 60);
  min = min < 10 ? "0" + min : min;
  let sec = parseInt(count % 60);
  sec = sec < 10 ? "0" + sec : sec;
  console.log(`${hour}:${min}:${sec}`);
};
Code_01();
setInterval(Code_01, 1000);


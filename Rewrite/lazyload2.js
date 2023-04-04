document.addEventListener("DOMContentLoaded", () => {
  if ("IntersectionObserver" in window) {
    const imgs = document.getElementsByTagName("img");
    const imageObserve = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 通过该属性判断元素是否出现在视口内
        if (entry.isIntersecting) {
          // entry.target能够取得那个dom元素
          const img = entry.target;
          img.src = img.dataset.src;
          // 解除监视
          imageObserve.unobserve(img);
        }
      });
    });
    [...imgs].forEach((img) => {
      // 开启监视每一个元素
      imageObserve.observe(img);
    });
  } else {
    alert("您的浏览器不支持IntersectionObserver！");
  }
});

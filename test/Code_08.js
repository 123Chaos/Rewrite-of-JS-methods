for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//输出55555

// for (var i = 0; i < 5; i++) {
//   setTimeout(
//     ((a) => {
//       console.log(a);
//     })(i),
//     1000
//   );
// }

//0.1.2.3.4.5

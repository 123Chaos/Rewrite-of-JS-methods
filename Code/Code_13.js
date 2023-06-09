// function Parent1() {
//   this.name = "parent";
//   this.play = [1, 2, 3];
// }

// function Child1() {
//   this.type = "child2";
// }

// Child1.prototype = new Parent1();
// console.log(new Child1());
// ----------------------------------------------------------------------------------------
// function Parent1() {
//   this.name = "parent1";
// }

// Parent1.prototype.getName = function () {
//   return this.name;
// };

// function Child1() {
//   Parent1.call(this);
//   this.type = "child1";
// }

// let child = new Child1();
// console.log(child); // 没问题
// console.log(child.getName()); // 会报错
// ----------------------------------------------------------------------------------------
// function Parent3() {
//   this.name = "parent3";
//   this.play = [1, 2, 3];
// }

// Parent3.prototype.getName = function () {
//   return this.name;
// };
// function Child3() {
//   // 第二次调用 Parent3()
//   Parent3.call(this);
//   this.type = "child3";
// }

// // 第一次调用 Parent3()
// Child3.prototype = new Parent3();
// // 手动挂上构造器，指向自己的构造函数
// Child3.prototype.constructor = Child3;
// var s3 = new Child3();
// var s4 = new Child3();
// s3.play.push(4);
// console.log(s3.play, s4.play); // 不互相影响
// console.log(s3.getName()); // 正常输出'parent3'
// console.log(s4.getName()); // 正常输出'parent3'

// let parent4 = {
//   name: "parent4",
//   friends: ["p1", "p2", "p3"],
//   getName: function () {
//     return this.name;
//   },
// };

// let person4 = Object.create(parent4);
// person4.name = "tom";
// person4.friends.push("jerry");
// let person5 = Object.create(parent4);
// person5.friends.push("lucy");

// console.log(person4.name);
// console.log(person4.name === person4.getName());
// console.log(person5.name);
// console.log(person4.friends);
// console.log(person5.friends);
// ----------------------------------------------------------------------------------------
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   // 原型方法
//   // 即 Person.prototype.getName = function() { }
//   // 下面可以简写为 getName() {...}
//   getName = function () {
//     console.log("Person:", this.name);
//   };
// }

// class Gamer extends Person {
//   constructor(name, age) {
//     // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
//     super(name);
//     this.age = age;
//   }
// }

// const asuna = new Gamer("Asuna", 20);
// asuna.getName(); // 成功访问到父类的方法
// ----------------------------------------------------------------------------------------
// function clone(parent, child) {
//   // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
//   child.prototype = Object.create(parent.prototype);
//   child.prototype.constructor = child;
// }

// function Parent6() {
//   this.name = "parent6";
//   this.play = [1, 2, 3];
// }
// Parent6.prototype.getName = function () {
//   return this.name;
// };
// function Child6() {
//   Parent6.call(this);
//   this.friends = "child5";
// }

// clone(Parent6, Child6);

// Child6.prototype.getFriends = function () {
//   return this.friends;
// };

// let person6 = new Child6();
// console.log(person6);
// console.log(person6.getName());
// console.log(person6.getFriends());
// ----------------------------------------------------------------------------------------

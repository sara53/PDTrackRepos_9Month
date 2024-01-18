/** AGenda
 * -------------------
 * == This
 * == This Pattern
 * == call
 * == bind
 * == apply
 * == closure
 * == Factory Pattern
 * == Function Constructor
 */

//
/**
 * ==  this --> window
 *
 */

// 1- this --> window
/**  */
// var fname = "ali";
// function getName() {
// 	console.log(this.fname);
// }
// var person = {
// 	fname: "mona",
// 	display: function () {
// 		getName.call(this);
// 	},
// };

// person.display();

// mona  13
// ali

// function sayHello() {
// 	console.log("Welcom PD Track");
// }

// sayHello();
// window.sayHello();

// var person = {
// 	fname: "mona",
// 	display: function () {
// 		console.log("Display");
// 	},
// };

// person.display();
// this --> window

// var fname = "outer";
// var person1 = {
// 	fname: "Ali",
// 	lname: "ahmed",
// 	display: function (x, y) {
// 		console.log(this.fname + " " + x + " " + y);
// 	},
// };

// var person2 = {
// 	fname: "mona",
// 	lname: "kareem",
// };
// var result = person1.display.bind();

// result("welcome", "ITI");

// person1.display();

// person1.display("welcome", "iti");
// person1.display.call(person2, "welcome", "ITI");
// person1.display.apply(person2, ["welcome", "iti"]);

// that pattern
// var fname = "ola";

// var person = {
// 	fname: "Sara",
// 	display: function () {
// 		var x = this;
// 		setTimeout(function () {
// 			console.log(x.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// function getArr() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}

// 	return arr;
// }

// var result = getArr();

// result[0]();
// result[1]();
// result[2]();

// function greet() {
// 	var x = "hello";

// 	var y = "alaa";
// 	function sayHello() {
// 		console.log(x);
// 	}

// 	return sayHello;
// }

// var result = greet();
// result();

// var result = greet();
// console.log(result);
// result()
/**=== Factory Pattern  == */
// function product(_id, _title, _price, _quantity) {
// 	return {
// 		id: _id || 0,
// 		title: _title || "",
// 		price: _price || "",
// 		quantity: _quantity || "",
// 		display: function () {
// 			console.log(this.price);
// 		},
// 	};
// }

// var p1 = product(1, "Book", 200, 10);

// var p2 = product(2, "Pen", 600, 10);
// var p3 = product(2, "Pen", 600, 10);
// var p4 = product(2, "Pen", 600, 10);

// console.log(p1);
// console.log(p2);
// console.log(p4);

// function Product(_name, _price) {
// 	this.name = _name;
// 	this.price = _price;
// }

// Product.prototype.display = function () {
// 	console.log(this.price);
// };

// var p1 = new Product("book", 200);
// var p2 = new Product("book", 500);

// console.log(p1);
// p1.display();
// p2.display();
// Product.prototype.test = "PD Track";
// console.log(Product.__proto__);
// console.log(Object.prototype.__proto__);

// var p2 = new Product("pen", 200);

// console.log(p1.__proto__.test);
// console.log(p2.__proto__.test);
// var p2 = new Product("pen", 500);
// console.log(p1);

// console.log( p1.toString() );
// console.log( p2.toString())

// var fname = "mona"; //
// var fname = new String("mona");
// console.log(fname);

// var arr = new Array() // var arr = []

// var person = {};

// new Object()

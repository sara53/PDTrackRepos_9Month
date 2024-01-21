/** OOP
 *
 *
 */

// parent
// function Person(fname, lname) {
// 	if (this.constructor == Person) {
// 		throw "can't create object from abstract class";
// 	}
// 	this.fname = fname;
// 	this.lname = lname;
// }

// Person.prototype.show = function () {
// 	throw "Method not implemented";
// };

// function User(fname, lname, age) {
// 	Person.call(this, fname, lname);
// 	this.age = age;
// }
// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;

// // User.prototype.show = function () {
// // 	console.log("Welcome show");
// // };
// var myUser = new User("ali", "ahmed", 30);

// myUser.show();
// Person.show();
// Person.prototype.display = function () {
// 	console.log(this.fname + this.lname + " from Person Func");
// };

// var p1 = new Person("person1", "lname");

// // child

// User.prototype.generatePassword = function () {
// 	console.log(
// 		this.fname.toUpperCase() + "_" + this.lname.toLowerCase() + "123"
// 	);
// };

// User.myStaticMethod = function () {
// 	console.log("Welcome from Static Method");
// };

// // override
// User.prototype.display = function () {
// 	p1.display.call(this);
// };
// var user1 = new User("ali", "ahmed", 25);

// console.log(User);

// var User = {
// 	prototype: {
// 		display: function () {
// 			console.log("welcome from display inside Product");
// 		},
// 	},
// };

// product.prototype.display();

// product.myStaticMethod = function () {
// 	console.log("welcome from Static");
// };

// product.prototype.myStaticMethod();
/** ================== */

// var product = {
// 	name: "book",
// 	price: 200,
// };

// Object.defineProperty(product, "quantity", {
// 	value: 10,
// 	writable: true, // false
// 	configurable: false,
// 	enumerable: false,
// });

// delete product.quantity;
// get
// product.quantity = "new quant"; // set
// console.log(product);

// for (var i in product) {
// 	console.log(product[i]);
// }

// function Person(fname, lname) {
// 	var myPassword = "123";
// 	this.fname = fname;
// 	this.lname = lname;

// 	Object.defineProperty(this, "getPassword", {
// 		get: function () {
// 			return myPassword;
// 		},
// 		set: function (value) {
// 			//myPassword = value;
// 		},
// 	});
// }

// var p1 = new Person("ali", "ahmed");

// p1.getPassword = "new Password"; // set
// console.log(p1.getPassword); // get

// class Person {
// 	constructor(fname, lname) {
// 		if (this.constructor == Person) {
// 			throw "Error";
// 		}
// 		this.fname = fname;
// 		this.lname = lname;
// 	}

// 	display() {
// 		throw " Method not implemented";
// 	}
// }

// var p1 = new Person();

// class User extends Person {
// 	constructor(fname, lname, age) {
// 		super(fname, lname);
// 		this.age = age;
// 	}

// 	generatePass() {
// 		console.log(
// 			this.fname.toUpperCase() + "_" + this.lname.toLowerCase() + "123"
// 		);
// 	}

// 	// override
// 	display() {
// 		console.log(this.fname + " " + this.age);
// 	}
// }

// var myUser = new User("ali", "ahmed", 29);
// myUser.generatePass();
// myUser.display();

// class Product {
// 	#id = "";
// 	constructor(name = "", price = "") {
// 		this.name = name;
// 		this.price = price;
// 		this.id = "welcome";
// 	}

// 	get id() {
// 		return this.#id;
// 	}

// 	set id(value) {
// 		// validation
// 		this.#id = value;
// 	}
// }

// var p1 = new Product("Book", 400);

// // p1.id = 123;

// console.log(p1.id);

// p1.setId(123); //
// p1.color = console.log(p1.getId());

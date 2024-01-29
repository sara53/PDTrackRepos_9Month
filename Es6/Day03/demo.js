/** Agenda
 * -------------------
 *  == Object.assign
 *  == Generator & Iterator
 *  == Modules
 *  == Proxy
 */

// let person1 = {
// 	fname: "Ali",
// 	age: 26,
// };

// let person2 = {
// 	color: "Red",
// 	age: 50,
// };

// let result = Object.assign({}, person1, person2);

// console.log("result", result);

// console.log("Person 1 ", person1);
// console.log("Person 2 ", person2);

// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		lname: "default lname",
// 		age: 1,
// 		address: "default add",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(
// 		`fname : ${defaultValues.fname} , lname : ${defaultValues.lname} , age:${defaultValues.age} , address:${defaultValues.address}`
// 	);
// }

// showData();

// console.log(arr);
// let person = {
// 	fname: "ali",
// 	age: 25,
// };
// console.log(person);
// for (let value of arr) {
// 	console.log(value);
// }

// console.log("---------------");
// for (let key of person) {
// 	console.log(key);
// }
// lab 1 - tasks1
// let arr = ["Front", "PD", "SD", "OS"];

// for (let x of arr) {
// 	console.log(x);
// }
// let person = {
// 	fname: "hoda",
// 	address: "benha",
// };

// person[Symbol.iterator] = genEven;

// function* genEven() {
// 	for (let i in person) {
// 		yield { [i]: person[i] };
// 	}
// }

// for (let x of person) {
// 	console.log(x);
// }
// arr[Symbol.iterator] = genEven;
// function genEven() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step > 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }

// let iter = arr[Symbol.iterator]();

// for (let i of arr) {
// 	console.log(i);
// }
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**
 * == function --> return {}
 *  {}  has next func
 * next function return {value,done}
 *
 *
 */

// let x = Symbol("age");

// let person = {
// 	fname: "mona",
// 	[x]: function () {
// 		console.log("Cb1");
// 	},
// };

// person[x] = function () {
// 	console.log("new");
// };
// person[x]();

// person[x] = function () {};

// console.log(person);

// let person = {
// 	fname: "Ali",
// 	age: 20,
// };

// let handler = {
// 	get: function (target, prop) {
// 		if (!(prop in target)) {
// 			throw `${prop} is not found in Person Object`;
// 		}
// 		return target[prop];
// 	},
// 	set: function (target, prop, value) {
// 		if (prop == "age" && value < 0) {
// 			throw "can not set negative value";
// 		}
// 		target[prop] = value;
// 	},
// };

// let myProxy = new Proxy(person, handler);

// myProxy.age = 30;

// console.log(myProxy);

// console.log(myProxy.fname); //
// console.log(myProxy.age);
// console.log(myProxy.color);
// import * as all from "./main.js";

// console.log(all.add(5, 7));
// console.log(all.square());

// all.default();
/** export naming
 * export default
 *
 *
 */

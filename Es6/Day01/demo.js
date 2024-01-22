/** Agenda
 * --------------
 *  == var -- let -- const
 *  == default Values
 *  == rest params
 *  == Spread Operators
 *  == destructring
 *  == Arrow Function
 *  == Array API
 *  == String API
 */

/**
 * Var
 * ===========
 * == reassign
 * == redeclartion
 * == Hoisting
 * == added to window Object
 * == function scope
 * =========================
 * == let
 * -----------------
 * 1- reassign
 * 2- can't redeclare
 * 3- can't be Hoisted
 * 4- not added to window object
 * 5- block scope
 * =================================
 * const
 *  * -----------------
 * 1-can't  reassign
 * 2- can't redeclare
 * 3- can't be Hoisted
 * 4- not added to window object
 * 5- block scope
 * =================================
 */
/**   */

// function show() {
// 	let test = "pd";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(test); //
// 		console.log(i);
// 	}
// 	//console.log(" i outside loop : ", i);
// }

// show();

// const PI = "PD";

// console.log(trackName);

// const arr = ["mona"];

// //arr = ["ali"]; // error
// arr.push("ali");
// console.log(arr);
// console.log("============");

// var a = 3;

// var b = a;

// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);

// console.log("--------------");

// var arr1 = ["mona", "ali"];
// var arr2 = [1, 2, 3, 4, ...arr1, "SD", "Os"];

// arr1.push("PD");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// var arr = [20, 10, 3, 6];

// console.log(Math.max(...arr));
// var arr = ["mostafa", "ali"];
// function add(a, b, ...rest) {
// 	console.log(rest);
// 	var x = [...arguments];
// 	console.log(x);
// }

// add("ali", "ahmed", true, 12);

// var arr = ["SD", "OS", "Front"];
// var [...y] = arr;

// console.log(x);
// console.log(y);
// console.log(z);

// function getArr(x) {
// 	return [
// 		x,
// 		function () {
// 			console.log(x);
// 		},
// 		"hoda",
// 	];
// }

// let [x, setX] = getArr("ahmed", "pd");

// console.log(x);
// setX();

// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 20,
// 	color: "red",
// };

// //let { fname: fname, age: age } = person;
// let { color } = person;

// console.log(color);
// console.log(" fname : ", fname);
// console.log(" age : ", age);
// default value
// function add(x = 0, y = 0) {
// 	console.log(x + y);
// }

// add();
// console.log("=======================");
// var str = "    Welcome from iti         ";

// console.log(`${str.trim()}  :)`);
/** ======== */
// statement
// function add(x, y) {
// 	return x + y;
// }

// // expression
// let result = function (x, y) {
// 	return x + y;
// };

// //arrow function
// let test = (x, y) => {
// 	return x + y;
// };

// let sayHello = () => console.log("SayHello");

// sayHello();
// widow
// var fname = "mona";
// let person = {
// 	fname: "ali",
// 	age: 30,
// 	display: () => {
// 		console.log(this); // person
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/** =====
 * == find
 * == findIndex
 * == map
 * == filter
 * == some
 * == every
 * == foreach
 *
 * (reduce) // search
 *
 * ======  */

// let arr = [10, 23, 15, 30, 56];
// let tracks = ["Front", "Sd", "OS", "tt"];

// let result = tracks.forEach((item, index) => {
// 	console.log(`${item}, ${index}`);
// });
// // let result = tracks.some((value) => {
// // 	return value.startsWith("F");
// // });
// console.log(result);

// let products = [
// 	{
// 		id: 1,
// 		name: "book",
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "Watch",
// 		cat: "elec",
// 	},

// 	{
// 		id: 4,
// 		name: "notebook",
// 		cat: "school",
// 	},
// 	{
// 		id: 5,
// 		name: "Window",
// 		cat: "furt",
// 	},
// ];

// let result = products.filter((item) => item.id != 2);

// let result = tracks.map(function (item, index) {
// 	return `<div><h1>${item}</h1></div>`;
// });

// console.log(result);
// var result = tracks.findIndex((item, index) => item.startsWith("S"));

// console.log(result);
// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("-------");
// }

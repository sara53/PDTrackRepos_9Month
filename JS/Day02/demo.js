/**
 * == Agenda ==
 * ==========================
 * == functions
 *    -- built in function
 *    -- user defined function
 *      -- function statement
 *      -- function expression
 *          - callback function
 *          - anonymous function
 *
 *
 * == Hoisting
 * == how  js engine excute js code code
 * == default values
 *
 * == string Object
 * == Array
 * ------------------------------------------
 * -- Math Object
 * -- Date Object (self study)
 *
 */

/** falsy values
 * ---------------------------
 *  == undefined
 *  == null
 *  == NaN
 *  == ""
 *  == 0
 *  == false
 *
 */

// var result = Boolean([]);
// console.log(result);

// console.log(isNaN(NaN));
// params
// function statement ,, function declartion
// function add(a, b) {
// 	a = a || 0;
// 	b = b || 0;
// 	console.log("a : ", a);
// 	console.log("b : ", b);
// 	console.log(a + b);
// }

// add(3, 5);
// var result = add();
// console.log(result);

// var result = Number("566");
// test();

// console.log( add( 7, 8 ) );

// var result = add(5, 7);
// console.log(result + 90);
// console.log("---------");
// var result = add(10, 30);
// console.log(result);
// add("mona", "ali");
// console.log("------------");
// add("ala", 455);
// console.log("---------");
// add(true, true);
// add(); //
// console.log("-----------");
// add(3);

// console.log("----------");
// add(4, 6);
// console.log("--------------");
// add(3, 4, 6, 7, 8);
// // arguments
// add(3, 4);
// console.log("------------");

// add(6, 7);
// console.log("-------");
// add(10, 10);

// function expression
// var result = function (a, b) {
// 	console.log(a + b);
// };

// var x = result(6, 7);
// console.log(x);
// add();

// console.log(result);

// console.log(fname);
// var fname = "ali";
// console.log(fname);

// console.log("--------------");
// var fname;

// console.log(fname);
// fname = "ali";
// console.log(fname);

// function add(a, b) {
// 	console.log(a + b);
// }
// add(6, 7);

// console.log(result);

// result(6, 7);
// var result = function (a, b) {
// 	console.log(a + b);
// };
// result();
// console.log("-------------------");
// var dotNetTrack = function () {
// 	console.log("Hello dotnet  from iti");
// };

// var pdTrack = function (instrName) {
// 	console.log(instrName);
// 	console.log("Hello pd from iti ");
// };

// function greet(myFun1, myFun2) {
// 	myFun1(pdTrack); //
// 	myFun2();

// 	console.log("Welcome from iti ");
// }

// // greet(pdTrack, dotNetTrack);

// greet(
// 	function (x) {
// 		x();
// 		// console.log(x);
// 		console.log("first Callback");
// 	},
// 	function () {
// 		console.log("second Call back");
// 	}
// );

// greet(pdTrack);
// console.log("------------");

// greet(function () {
// 	console.log("Welome x track");
// });
// var fname = "mona";
// greet(fname);
// console.log("--------");
// greet("mona");
// console.log("-------------");
// greet(true);
/** String API
 * ----------------
 * == length
 * ----------------
 *  == charAt -->
 *  == indexOf
 *  == lastIndexOf
 *  == toLowerCase
 *  == toUpperCase
 *  == split
 *  == concat
 *  == trim
 *  ==trimStart
 *  == trimEnd
 *  == includes
 *  == endsWith
 *  == startWith
 */

// var fname = "hello from iti";
// console.log(fname.endsWith("i"));
// var result = fname.concat("from iti");
// console.log(result);
// console.log(fname + "From iti");

// console.log(fname[99]);
// var result = fname.split(";")[0];
// console.log(result.split("=")[1]);
// console.log(fname.length);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }
/**---------- Array
 * length
 *----------------
    == push 
    == unshift
    == pop
    == shift
    == concat
    == reverse
   == join
 *
 * -------- */
// var studentsNames = [20, 40, 10, 3, 4];

// var result = studentsNames.join("=====");
// console.log(result);
// studentsNames.sort(); // callback function
// studentsNames.reverse();
// var result = studentsNames.concat([1, 24]);
// console.log(result);
// studentsNames.shift();
// studentsNames.pop();

// studentsNames.unshift("ahmed");
// studentsNames.unshift("34");
// studentsNames.push("ahmed");
// studentsNames.push(345);
// studentsNames.push(345);
// console.log(studentsNames);

// console.log(studentsNames[4]());
// studentsNames[0] = "ali"; // set

// console.log(studentsNames[0]); // get
// for (var i = 0; i < studentsNames.length; i++) {
// 	console.log(studentsNames[i]);
// }

// var fname = "ahmed"; // demha

// var result = fname.split("").reverse().join("");
// console.log(result);

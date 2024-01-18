/** Agenda
 *  client -- server -- History
 *  = where js code is written
 *  = Datatypes
/** Datatypes
 *------------------------------
   1- Primitve Datatype
    == string
    == number
    == boolean
    == undefined
    == null
   2- Reference Datatype

   /** regex (self study) */

/** NaN --> Not a number */
/** Falsy Values
 *  false
 *  0
 *  NaN
 *  undefined
 *  ""
 *  null
 *
 *
 */

// var fname = "ali"; // string

// fname = 30; // accepted

// console.log(fname);

// var firstName = "Ali";
// var firstName = 50;

// console.log(typeof firstName);

// firstName = true;

// console.log(typeof firstName);
// /** camelCase */
// var firstName = "sara";
// var num = 20.2368;

// var flag = true;

// var myName;

// console.log(myName);
// console.log(typeof myName);
// console.log(typeof fname);
// console.log(typeof num);
// console.log(typeof flag);

/** first
 *
 * firstSecond
 * firstSecondThird
 *
 */

// var fname;

// console.log(typeof fname);

// fname = 30;

// console.log(typeof fname);

// var fname = null; // fname = {}

// fname = 40;
// console.log(typeof fname);
// var fname = "ali"; // literal creation
// var fname = String(10);

// console.log(fname);
// console.log(typeof fname);

// var num = "10";
// console.log(typeof num);
// console.log(fname);

// var num = 30;
// var num = Number("mona");

// console.log(num);
// console.log(typeof num);

// var flag = true;
// var flag = Boolean("false");
// console.log(flag);
/***
 * + ==> number + number --> Add
 *   ==> string + string -- concat
 *
 *
 *  - --> number - number -- sub
 */

// var num1 = 10;
// var num2 = "mona"; /// 10

// /**  (coercion) --> jsEngine ==> convert automatic from datatype to anther datatype */
// console.log(num1 - num2);
/**--------
 *  [==]         --> (values)
 *  [===]        --> (values & datatypes)
 *
 *
 * ------ */

// var num1 = false; // 1

// var num2 = ""; //NaN number

// console.log(num1 == num2); // false
// // console.log(num1 === num2); // false
/**======================================= */
// logical operator

/**
 * &&
 *
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * -------------------------
 * ||
 *
 * true || true --> true
 * true || false --> true
 * false || true --> true
 * false || false --> false
 *
 * --------------------
 * true-- > false
 * false --> true
 *
 *
 */

/** short circuits
 *  "mona" && "ola"
 *  true && true
 *
 * 0 && undefined
 * false &&
 */

// ( 1 > 0 ) && ( 3 > 4 )
/**  
 * 
 * 
 * "mona" || "ola"
  0 || unde
*/
/**  */

// function test() {
// 	console.log("ali");
// }

// console.log(test || 0);

// console.log("ffrd");

// for (var i = 0; i < 3; i++) {
// 	console.log(i);
// }

// var i =0
// while ( i < 3 ) {
//     i++
//     console.log(i)
// }

// do {

// }while(cond)

// var color = "red";
// if (color == "green") console.log("your fav colod is : green");
// else console.log("You don't hav any fav colors");
// (condition) ? line true : line false

// color == "green"
// 	? console.log("Red")
// 	: color == "green "
// 	? console.log("green")
// 	: null;

/** ---------  --------- */
// var num1 = Number(prompt("Enter Number1"));
// var num2 = Number(prompt("Enter Number2"));
// console.log(num1 + num2);
// var i = 1;
// document.writeln("Hello Pd track");
// document.writeln("<h1 class='red'>Hello Pd track</h1>");

// for (var i = 1; i < 7; i++) {
// 	document.writeln("<h" + i + ">Hello Pd track</h" + i + ">");
// }

// alert("you delete an item");

// var result = confirm("Are you sure you want to delete this item");

// result
// 	? document.writeln("You deleted this item")
// 	: document.writeln("Operation cancelled");
/**========== */

function test(fname) {
	fname = fname ?? "Sara";
	console.log(fname);
}

test(null);

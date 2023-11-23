/**
 * Agenda
 *
 *  == functions executions in memory
 *  == shadwing
 *  == local scope VS global scope
 *  == Object
 *  == Math Object
 *  == DOM Tree
 * -----------------------------------------
 * -- Dome
 *  -- How to select elements from dom
 *  -- change content
 *  -- Change Style
 *
 * 
 * 
 * /** Dom --> Document Object Model
 * ---------------------------------
 * ==  How to select Element from Dom
 * == Dom Tree
 * ---------------- Methods -------------------
 * == getElementById --> element
 * == querySelector --> element
 * == getElementsByClassName --> collection
 * == getElementsByTagName --> collection
 * == getElementsByName --> collection
   == querySelectorAll --> NodeList
 *
   --------------------- properties---------------------
 * == document.body
   == document.links
   == document.images
   == document.forms
   ==firstChild
   ==[parent].firstElementChild
   == lastChild
   == lastElementChild
   == childNodes
   == children

   
/** change content
 * == innerText
 * == innerHTML
 * == textContent (search)
 * ------------------change Style--------------
 *  1- style object
 *  2- className
 *  3- classList
 *    -- add
 *    -- remove
 *    -- toggle
 *

 */

// var test = "mona";
// function greet() {
// 	test = "Ali";
// 	console.log(test);
// 	return "Welcome from iti";
// }

// console.log("test before calling : ", test);

// var result = greet();

// console.log("test after calling : ", test);
// console.log(result);
// console.log("--------------------");

// function greet() {
// 	var result = dotNetTrack("DotNet track");
// 	console.log("Welcome From ITI");
// 	return result;
// }

// function dotNetTrack(trackName) {
// 	console.log("Welcome ", trackName);
// 	return "Done";
// }

// var result = greet();
// console.log(result)
// console.log("End of execution")

// function sayHello() {
// 	console.log("Hello");
// }

// sayHello();
/** -------
 * Properties
 * prop --> key : value (any datatype)
 * Methods
 *-----------------------------
  == dot notation
  == subscript notation
 * ------------- */
// var myKey = "age";
// var person = {
// 	fname: "Ali",
// 	age: 30,
// 	address: {
// 		city: "benha",
// 		street: "Saad str",
// 		code: 123,
// 	},
// 	lname: "ahmed",
// 	gender: true,
// };
// console.log(person[myKey]); // get

// console.log(person.myKey);

// person.fname = "alaa";
// person["fname"] = "new Value";

// console.log(person);
// console.log(person.address["city"]);
// console.log(person.address.city);
// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person["fname"]);
// console.log(person.fname);
// console.log(person["address"]["city"]);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.address.code);
// console.log(person.address.street);

// console.log(person.fname); // get
// console.log(person.color); // undefined

// person.fname = "mona"; // set; override
// person.color = "red"; // added
// console.log(person);
/**------------------- */

// var person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	display: function (index) {
// 		console.log(person.fname);
// 	},
// };

// // // method
// console.log(person.display());

// var fname = "ITI";

// console.log(fname.length); //
// fname.charAt(0);

// console.log(Math);

/**
 * Math
 * == PI
 *-----------------------
  == sqrt -
  == pow
   == abs
   == sign
   == max 
   == min
   ---------------
   == round
   == floor
   == ceil
   == random
   == sin

 */

// console.log(Math.floor("5.2"));
// console.log(Math.sin((90 * Math.PI) / 180));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.ceil(5.0));
// console.log(Math.max(3, 5, 7, 1, 2));
// console.log(Math.min(3, 5, 7, 1, 2));

//|-20|
// console.log(Math.PI);

// console.log(Math.sqrt(25));
// console.log(Math.pow(3, 2));
// console.log(Math.abs(-20));
// console.log(Math.sign(600));
// console.log(Math.sign(-40));
// console.log(Math.sign(0));

// var parent = document.getElementById("parent");
// console.log(parent.childNodes);
// console.log(parent.children);
// console.log(document.images);
// var parent = document.getElementById("parent");

// var element = document.querySelector("div");
// console.log(element);
// console.log(elements[0].value);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

// var p = document.getElementsByClassName("content")[0];
// function changeContent() {
// 	// p.innerHTML = "<h1>Welcome pd Track</h1>"; // set
// 	// console.log(p.innerText);
// }
// var input = document.getElementById("input1");
// var p = document.getElementById("output");

// var inputs = document.getElementsByName("choose");
// function showResult() {
// 	console.log(input.value);
// 	p.innerHTML = input.value;
// }

// function showAnswer() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			p.innerHTML = inputs[i].value;
// 		}
// 	}
// }

/** --------- change Style--------- */
/**  */
var p = document.getElementsByClassName("content")[0];

// style object
// function changeStyle() {
// 	p.style.backgroundColor = "#3d1c72";
// 	p.style.color = "#fff";
// 	p.style.padding = "20px";
// 	// p.style.backgroundColor = "red";
// }

// function changeStyle() {
// 	console.log(p.className); // get
// 	p.className += " jsClass";
// }
function changeStyle() {
	// p.classList.remove("myP");
	p.classList.toggle("jsClass");
	// p.classList.add("jsClass");
	//console.log(p.classList); // get
}

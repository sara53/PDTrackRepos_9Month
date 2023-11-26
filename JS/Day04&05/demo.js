/**
 *  == Dom
 *    == Attributes
 *    ==Create Elements
 *
 *
 * ----------------------------
 * == Bom
 *  -- Window
 *  -- screen // self study
 *  -- navigator
 *  -- history
 *  -- location
 *---------------------------------
  == Events 
      == add attribute
      == attach functions
      == add Event Listener
 */

/**
 * attributes
 * ----------------------
 *
 * [htmlObject].attributes
 * == getAttribute
 * == setAttribute
 * == removeAttribute
 * == hasAttribute
 *
 */
// var link1 = document.links[0];
// var link2 = document.links[1];
// var link3 = document.links[2];
// var img = document.images[0];
// function execute() {
// if (link1.hasAttribute("href")) {
// 	link1.removeAttribute("href");
// } else {
// 	link1.setAttribute("href", "#google");
// }
// console.log(link1.hasAttribute("href"));
// console.log(link1.removeAttribute("class"));
// console.log(img.getAttribute("src"));
// console.log(img.setAttribute("src", "./Images/2.jpg"));
// link1.setAttribute("class", "jsClass");
// console.log(link1.getAttribute("href"));
// console.log(link2.getAttribute("href"));
// }

/** ----------- -------------  */
// element.innerHTML = "Welcome pd track";

// element.setAttribute("id", "p1");

// // element.id = "myP";
// element.setAttribute("class", "jsClass");
/** =============================== */
// var parent = document.getElementById("parent");
// var element = document.createElement("p");
// var span = document.createElement("span");
// var myText = document.createTextNode("Welcome PD Track");
// span.innerHTML = "Welcome Span";
// console.log(span);
// // var comment = document.createComment("this is a comment");
// // console.log(comment);
// // element.innerHTML = myText;
// // element.appendChild(myText);
// var result = element.appendChild(span);
// // console.log("Result ", result);
// // element.append("Welcome from append");
// // console.log(element);
// function addNewElement() {
// 	// parent.appendChild(element);
// 	// parent.appendChild(span);
// 	// parent.append(element, span);
// 	// parent.before(element);
// 	parent.after(element);
// }

/** ======================= */

// alert("Alert");

// var person = {
// 	fname: "ali",
// 	display: function () {
// 		console.log("Hello");
// 	},
// };

// person.display();
// console.log(window);
// [window].alert()//
// alert()
// var myWind;
// function openNewWindow() {
// 	myWind = window.open("about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(400, 400);
// }
// function moveByWindow() {
// 	myWind.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWind.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }

// setTimeout(function () {
// 	open("about.html");
// 	// console.log("called After 3 seconds");
// }, 3000);

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

/** ============ */

// function execute() {
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// 	// location.pathname = "/about.html";
// 	// console.log(location.pathname); // get
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log(location.href); // get
// 	// console.log(location);
// 	// console.log("------------hISTORY OBJECT-------");
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log(history);
// }

// function successFun(position) {
// 	console.log("position : ", position);
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// 	// called allow
// }

// function errorFun() {
// 	// deny
// 	console.log("in case deny");
// }

// navigator.geolocation.getCurrentPosition(successFun, errorFun);
/** =========== Events ========== */

/**
 *  == Attach Function
 *
 */

// var btn = document.getElementById("btn");
// var p = document.getElementById("result");

// function changeContent() {
// 	p.innerHTML = "<h1>Welcome PD Track</h1>";
// }

// function show() {
// 	console.log("show function");
// }
// btn.addEventListener("click", changeContent);

// setTimeout(function () {
// 	console.log("Settimeout executed");
// 	btn.removeEventListener("click", changeContent);
// }, 3000);
// function changeStyle(color) {
// 	p.style.background = color;
// }

// // btn.addEventListener("click", changeContent);
// btn.addEventListener("click", function () {
// 	changeStyle("green");
// 	changeContent();
// });

// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// var person = {
// 	fname: "Ali",
// 	display: function () {
// 		console.log("First");
// 	},
// };

// person.display = function () {
// 	console.log("Second");
// };
// console.log(person.display());

// var input = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input.addEventListener("focus", function () {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function () {
// 	input.style.border = "2px solid orange";
// });

// input.addEventListener("input", function (e) {
// 	if (e.target.value.length <= 3) {
// 		input.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	} else {
// 		input.style.border = "2px solid green";
// 		errorMsg.style.display = "none";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login");
// }

function first(e) {
	// e.stopPropagation();

	console.log("first");
}
function second(e) {
	e.stopPropagation();

	console.log("second");
}
function third(e) {
	// e.stopPropagation();
	console.log("third");
}

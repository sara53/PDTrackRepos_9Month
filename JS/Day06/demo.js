// function getAllUsers() {
// 	var tbody = document.getElementById("tbody");

// 	var xhr = new XMLHttpRequest(); //
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var response = xhr.response;
// 				var userData = JSON.parse(response);
// 				var tr = document.createElement("tr");
// 				var td1 = document.createElement("td");
// 				var td2 = document.createElement("td");
// 				var td3 = document.createElement("td");
// 				console.log(tr);

// 				td1.innerHTML = userData.id;
// 				td2.innerHTML = userData.name;
// 				td3.innerHTML = userData.email;

// 				tr.append(td1, td2, td3);
// 				tbody.append(tr);
// 			}
// 		}
// 	};

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
// 	xhr.send("");
// }

/** ------------------ */

// document.cookie // get

// document.cookie = "username=ali;";
// document.cookie = "email=a@a.com;";
// document.cookie = "password=123";

// document.cookie = "username=mona";

/**
 * sun --0
 * mon - 1
 *
 *
 *
 */
var date = new Date();
date.setDate(date.getDate() + 3);

// // console.log(date);

// document.cookie = "email=mona@gmail.com;expires=" + date;

// var expireDate = new Date();

// expireDate.setDate(expireDate.getDate() - 1);
// console.log(expireDate);

// document.cookie = "email=mdkd ; expires=" + expireDate;

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + date;
// }

// function getAllCookies() {
// 	return document.cookie;
// }

// function getCookie(key) {
// 	// logic
// }

// function deleteCookie(key) {}
// saveCookie("password", 123);

// console.log("-------------");
// console.log("first");
// console.logg("second");
// console.log("third");

// console.log("Hello");
// throw "My Error";

// console.log("welcome");

// try {
// 	console.log("first");
// 	console.logg("second");
// 	console.log("third");
// } catch (error) {
// 	console.log("Welcome from catch block");
// 	//throw "Error";
// 	// console.log("final output");
// } finally {
// 	console.log("final");
// }

// function add(a, b) {
// 	if (arguments.length > 2) {
// 		throw "Pass two args only";
// 	}

// 	console.log(a + b);
// }

// add(10, 30);

/** Agenda
 * -------------------
 *  == Object Properties
 *  == SetTimeOut executions
 *  == Promises (then -- catch / async -- await)
 *  == Fetch
 */

// var fname = "ali";
// var age = 20;

// let person = {
// 	fname,
// 	age,
// 	display() {
// 		console.log("display ");
// 	},
// };

// person.display();
// console.log(person);

// let myKey = "fname";

// let person = {
// 	[myKey]: "ali",
// 	lname: "ahmed",
// };

// console.log(person);

// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// let result = Object.keys(person);
// let result = Object.values(person);
// let result = Object.entries(person);
// console.log(result);

/** first -- end -- second
 *   first -- second --one
 *
 *
 */

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End Of First");
// }
// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("welcom");
// }

// first();

// setTimeout(() => {
// 	console.log("first");
// }, 0);

// console.log("Second");

// setTimeout(() => {
// 	console.log("first");
// }, 2000);

// setTimeout(() => {
// 	console.log("Second");
// }, 1000);

// console.log("End");
/** ===============  */

// var x;

// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 2000);

// var products;

// setTimeout(() => {
// 	products = [100, 200, 400];

// 	setTimeout(() => {
// 		var product = {
// 			id: products[0],
// 			name: "Book",
// 			price: 300,
// 		};

// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

// var myPromise = new Promise(function (x, y) {
// 	var product;
// 	setTimeout(() => {
// 		product = [100, 200, 300];
// 		if (product) {
// 			x();
// 		} else {
// 			y();
// 		}
// 	}, 2000);
// });

// console.log(myPromise);

/**  Pending
 *   fulfilled
 *   rejected
 *
 */

// var myPromise = new Promise(function (x, y) {
// 	//x("PD Track");
// 	y("Error Message");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Welcome from then");
// 	})
// 	.catch(function (errorMsg) {
// 		console.log(errorMsg);
// 		console.log("From Catch");
// 	});

/** */

// function Test(myFun) {
// 	myFun(
// 		function (a) {
// 			console.log(a);
// 			console.log("Welcome from fulfilled");
// 			// fulfilled
// 		},
// 		function (b) {
// 			console.log("Welcome from rejectd");
// 			// rejected
// 		}
// 	);
// }

// var myPromise = new Test(function (x, y) {
// 	x("Mostafa");
// 	//y();
// });

// function getProductsList() {
// 	var myPromise = new Promise(function (x, y) {
// 		var products;

// 		setTimeout(() => {
// 			products = [100, 200, 424];

// 			products ? x(products) : y("Error on getting products List");
// 		}, 2000);
// 	});

// 	return myPromise;
// }

// function getProductDetails(productId) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			var product = {
// 				id: productId,
// 				name: "book",
// 				price: 300,
// 			};

// 			product ? resolve(product) : reject("Error on getting product Details");
// 		});
// 	});
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		let price = product.price;
// 		price ? resolve(price) : reject("Error on getting price");
// 	});
// }

// async function execute() {
// 	try {
// 		let productsList = await getProductsList();
// 		let product = await getProductDetails(productsList[0]);
// 		let response = await getPrice(product);
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// getProductsList()
// 	.then((productsList) => {
// 		return getProductDetails(productsList[0]);
// 	})
// 	.then(function (product) {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((errorMsg) => console.log(errorMsg));

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let data = await response.json();
// 	console.log(data);
// }

// execute();

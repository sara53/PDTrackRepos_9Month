/**
 * number
 * boolean
 * string
 * undefined
 * null
 * any
 */

// let fname = "ali"; // string
// fname = "Hoda";

// console.log(fname);

// let fname: boolean = false;

// fname = true;

// fname = false;

// let fname: string;

// console.log(fname);
// fname = "ali";

// let fname: any;

// console.log(fname)

// fname = "alaa";

// fname = 10;

// fname = true;

// let fname;
// console.log(fname);

// union
// let test: number | string | boolean = 10;

// test = "ali";

// test = true;
// define custom type
// type x = number | string;
// let fname: x = "ali";

// let person: { fname: string; age: x };
// let person: { fname: string; age: number } = { fname: "ali", age: 20 };

// person.age = 40;

// let test: { fname: string; age: 10 } = { fname: "khaled" };
// let products: { id: number; name: string; price: number }[] = [];

// products.push({ id: 10, name: "Book", price: 20 });
// console.log(products);
// let arr: string[] = ["mona"];
// let arr2: stringOrNumber[] = ["mona", 10];
// let arr3: any[] = ["mona", 10];
// let arr: stringOrNumber[] = [];
// arr.push("ali");
// arr.push(20);|}
// arr.push(true);

// let product: { id: number; name: string };
// product.id = 1;
// product.name = "Akd"
// product = { id: 30, name: "Pen" };
// product.id = 40;

// let fname:string;
// fname =

// let fname = "ali";
type stringOrNumber = string | number;

// function add(x: string | number, y: string) {
// 	return x + y;
// }

// // add(5, 6);

// add("mona", "ali");

// function add(x: number, y: number): stringOrNumber {
// 	return x + y;
// }

// add(3, 5);

// function sayHello(): void {
// 	console.log("Hello");
// }

// function add(x: number, y: number, ...rest: string[]) {}

// add(3, 4, "mona", "34");
/** ================== */

// function add(x: number = 0, y: number = 0) {}

// add(); //

/** ================== */
// function add(x: number, y: number) {}

// function add() {}

// add(6);
/** ==========Tubles======== */

//let arr: [string, number] = ["mona", 10];

// let result: [string, number] = ["mona", 20]; // error
// function showData(fname: string, age: number) {
// 	console.log(fname, age);
// }

// showData(...result);

/**================== */

// class Person {
// 	constructor(
// 		public fname: string,
// 		public age: number,
// 		private password: string
// 	) {}

// 	/**
// 	 *fname:string
// 	 * constructor(fname:string){
// 	 * this.fname = fname
// 	 * }
// 	 */

// 	get getPassword() {
// 		return this.password;
// 	}

// 	set setPassword(value: string) {
// 		this.password = value;
// 	}
// 	display(): void {
// 		console.log("this.display");
// 	}
// }

// let p1 = new Person("mona", 20, "ss");
// p1.display();

interface Iperson {
	id: number;
	fname: string;
	lname: string;
	display: () => void; //
}
// // superClass
class Person implements Iperson {
	constructor(public id: number, public fname: string, public lname: string) {}

	display() {
		console.log("code");
	}
}

// // child - subClass
class User extends Person {
	constructor(
		id: number,
		fname: string,
		lname: string,
		public password: string
	) {
		super(1, fname, lname);
	}
	generatePass(): void {
		console.log("New Implementation");
	}
}

// // let u1 = new User("ali", "ahmed", "123");
// type x = { id: number };

// let test: x = { id: 1 };

// let arr: x[] = [{ id: 1 }];

// class Test implements x {
// 	constructor(public id: number) {}
// }

// interface IProduct {
// 	id: number;
// 	// name: string;
// 	// price: number;
// 	// quantity: number;
// 	// imgSrc?: string;
// }

// class B {
// 	constructor() {}
// }

// class Product extends B implements IProduct {
// 	constructor(public id: number) {
// 		super();
// 	}
// }
// let products: IProduct[] = [
// 	{ id: 1, name: "book", price: 20, quantity: 10, imgSrc: "assets/imgs/1.jpg" },
// 	{ id: 2, name: "book", price: 20, quantity: 10, imgSrc: "assets/imgs/1.jpg" },
// 	{ id: 3, name: "book", price: 20, quantity: 10, imgSrc: "assets/imgs/1.jpg" },
// ];

/** abstract -- enum */

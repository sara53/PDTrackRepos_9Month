"use strict";
/**
 * number
 * boolean
 * string
 * undefined
 * null
 * any
 */
// // superClass
class Person {
    constructor(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    display() {
        console.log("code");
    }
}
// // child - subClass
class User extends Person {
    constructor(id, fname, lname, password) {
        super(1, fname, lname);
        this.password = password;
    }
    generatePass() {
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

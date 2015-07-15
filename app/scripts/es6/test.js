class Person {
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		console.log(`Hello ${this.name}`);
	}
}

let jason = new Person("Jason");
jason.sayHello();
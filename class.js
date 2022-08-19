'use strict';
//Object-oriented programming
//class : template
//Object: instance of a class
//javascrip classes
//-introduced in ES6
//-symtactical sugar over prototyped-based inheritance    

//1. class declarations  
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    } 
    //methods
    speak() {
        console.log(`${this.name} : hello`);
    }
}

const jbclass = new Person('Jbson', 55)

console.log(jbclass.name);
console.log(jbclass.age);
jbclass.speak();

//2. Getter and setters
class user {
    constructor( firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    get age() {
        return this._age
    }

    set age(value) {
        //if (value < 0) {
        //  throw Error('age cannot be negative');
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new user( 'Steve', 'jobs', -1);
console.log(user1.age);

//3. Fields (Public, Private)
//too soon!
//https://developer.moziller.org/en-US/docs/Web/javascript/refer

class Experiment{
    publicField = 2;
    #privateField = 0;  //#은 해쉬
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


//4. static Properities and methods
//Too soon

class Artical {
    static publisher = 'Dream Coding';
    constructor(ArticalNumber) {
        this.ArticalNumber = ArticalNumber;
    }

    static printPublisher() {
        console.log(Artical.publisher);
    }
}

const artical1 = new Artical(1);
const artical2 = new Artical(2);

console.log(artical1.publisher);
Artical.printPublisher();           //static class method 직접 call

//5. Inheritance 
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color  !!`);
    }    
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('*');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); 
console.log( triangle.getArea());

//6. Class checking Instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


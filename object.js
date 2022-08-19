//Objects
//one of the Javascript's data types.
//a collection of related data and/or function
//Nearly all objects in javascript are  instance
//Object = { key : Value}; Object는 key와 Value의 집합체이다

//1. literals and properities
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  //'object constructor' systax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jbson = {name: 'jbson', age: 5};
print(jbson);

//2. Computed properties
//key should be always string
//나중에 동적으로 Key Value를 받아올때 유용하게 쓰일수 있다.
console.log(jbson.name);
console.log(jbson['name'])   //computed properties
jbson['hasjob'] = true;
console.log(jbson.hasjob);

function printValue(obj, key) {
    console.log(obj.key);   //코딩하는 시점에는 Key에 대해서 전혀 몰라
                            //undefined로 나온다, obj의 Properties로 인식함
    console.log(obj[key])
}

printValue(jbson, 'name');  //undefined error
printValue(jbson, 'age');

//3. properties value shorthand
//
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('f_name', 7)  //function으로 obj 만드는 법
console.log(person4);

//4. construction function
function Person (name, age) {   //object를 만드는 함수는 대문자로 시작한다
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5. in operator: property existence check (key in obj)
console.log('name' in jbson);    //true
console.log('age' in jbson);     //true
console.log('random' in jbson);  //false
console.log(jbson.random);       //undefined

//6. for...in Vs for..of
//for (key in obj)

console.clear();
for (key in jbson) {
    console.log(key);       //name, age, hasjob
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of  array) {
    console.log(value);     //1, 2, 3, 4, 5
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3..])

const user = {name: 'ellie', age: '5'};
const user2 = user;    //user2는 user가 가리키는 Ref를 동일하게 가르키고 있다.
//그래서 

user2.name = 'coder';
console.log(user)      //{name: 'coder', age:'5'}

//그러면 user를 복제하고 싶으면
// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.log(user3)      //{name: 'coder', age:'5'}로 복제됨

//assign method 활용법
const user4 = {};
Object.assign(user4, user);
//const user4 = Object.assign({}, user);  //위의 방식을 이렇게 적용 가능함.
console.log('assign 활용', user4);         //{name: 'coder', age:'5'}

//another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);   //blue, red가 Blue에 update됨
console.log(mixed.size);    //big

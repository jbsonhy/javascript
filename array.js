'use strict';

//Array

//1. declaration
const arr1 = new Array();
const arr2 = [1, 2, 3];

//2. Index position
const fruits = ['apple', 'banna'];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);

//3. looping over an array
//print all print
//a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of

for (let fruitarray of fruits) {
    console.log(fruitarray);
}

//c. forEach , ctrl + click으로 사용법 리딩 (callback 함수
//값 마다 함수를 실행한다)
// fruits 값의 수 만큼 function이 호출된다. 거기에 세개의 값을 받을 수 있음.
fruits.forEach(function (fruit, index) {
    console.log(fruit, index)
});

//위의 예처럼, 이름이 없는 함수는 Arrow 함수로 대체 가능하다


//4. addition, deletion, copy
//push : add an item to the end
//pop : remove an item from the end 

fruits.push('perl', 'tomato');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning
fruits.unshift('perl', 'tomato');
console.log(fruits);

//shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

//!!note : shift, unshift are slower than pop, push
//splice : remove an item by index position

fruits.push('banna', 'strawbelly');
console.log(fruits);
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(1,1, 'melon', 'orange');
console.log(fruits);

//combine two arrays
const fruits2 = ['water', 'oxgen'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); 

//5.Searching : indexOf
//find the index 
console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf('banna') );

//includes
console.log(fruits.includes('orange'));

//lastIndeOf
console.log(fruits);
fruits.push('banna');
fruits.lastIndexOf('banna');
console.log(fruits);
console.log(fruits.indexOf('banna') );
console.log(fruits.lastIndexOf('banna') );
function log(message) {
    console.log(message);
}

log("I'm King");

log('i am king');

//Parameters
//premitive parameters : passed by value
//object parameters : passed by reference

function changeName(obj) {
    obj.name = 'coder';
}

const jbson = {name: 'jbson'}
changeName(jbson);
console.log(jbson)

//Default parameters (add in ES6)
function showMessage(message, from = 'unKnown') {
    console.log(`${message} by ${from}`);
}

showMessage('kimsunhee')
showMessage('kimsunhee', 'jbson')

//4. Rest parameters (added in ES6)
function printArray(...args) {
    for ( let i = 0; i < args.length; i++ ) {
        console.log(args[i]);
    }

    for ( const arg of args) {
        console.log(`special for sentence ${arg}`);
    }

    args.forEach((arg) => console.log(arg))
}

printArray('aaa', 'bbb', 'ccc', 'ooo')

//밖에서는 안을 볼수 없고 안에서는 밖을 볼 수 있다
//지역 변수 (안에서만), 글로벌 변수 (안에서 가능)
//지역변수는 밖에서 볼 수 없다.

function sum(a, b) {
    return a+b;
}
const result = sum(5,6);
console.log(`===${result}`)
console.log(`두수의 합은 ${sum(5,6)}`)

//early return, early exit
//bad 
function upgradeUser(user) {
    if(user.point > 10) {
        //long upgrade logic
    }   
}
//good

function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//Arrow function
//always anonymous function

const simplePrint = function () {
    console.log('simple Print');
}

const simplePrint1  = () => console.log('simplePrint..arrow function')
const add = (a, b) => a+b;

const simpleMultiply = (a, b) => {
    //do something more 
    return a*b;    
}

console.log(`multiply ${simpleMultiply(5,2)}`);
console.log(`=== ${add(1,2)}`);

simplePrint1();

//IIFE : immediately Invoked Function Express
(function hello() {
    console.log('IIFF')
})();


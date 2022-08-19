'use strict';

//javascript is synchronous
//Execute the code block by orger after hoisting.
//hoisting: var, function declaration

console.log('1');
setTimeout(() => console.log('2'), 1000 ); 
console.log('3');


//Synchronous callback 
function printImmediately(print) {
    print();
}
printImmediately(function() {
    console.log('풀어쓰기')
});
printImmediately(() => console.log('hello') );

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print,timeout);
}
printWithDelay(function(){
    setTimeout(function() {
        console.log('플어쓰기 2'),2000
    });
});
printWithDelay(() => console.log('asynchronous callback'), 2000);
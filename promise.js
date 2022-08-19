'use strict';

//Promise is a javascript object for asynchronous operation.
//state: pending -> fulfilled or rejected
//produce vs consumer

//1. producer
//when new Promise is created, the execute runs automatically
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (networm, read files)
    console.log('doing something...');
    setTimeout(() =>{
 //       resolve('elli');
        reject(new Error('no network'));
    }, 2000)
});

//2. Consumer: then, catch, finally
promise
  .then(value => {
    console.log(value); 
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });  

  //3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
    .then(num => num *2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(num - 1), 1000);
        });
    })   
    .then(num => console.log(num));

    //4. Error Handling
    const getHen = () => 
      new Promise((resolve, reject) => {
        setTimeout(() => resolve('HEN'),1000);
    });
    const getEgg = hen => 
      new Promise((resolve, reject) => {
//        setTimeout(() => resolve(`${hen} => EGG`),1000);
         setTimeout(() => reject( new Error(`error! ${hen} => EGG`)),1000);
    });
    const cook = egg => 
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => **`),1000);
    });
/*
    getHen()
       .then(hen => getEgg(hen))
       .then(egg => cook(egg))
       .then(meal => console.log(meal));  
*/ //아래와 같이 표현이 가능함.
    getHen() //
      .then(getEgg)
      .catch(error =>{
        return '===bug';
      })
      .then(cook)
      .then(console.log)   
      .catch(console.log);
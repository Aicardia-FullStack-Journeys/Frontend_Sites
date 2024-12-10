console.log('Fine I\'m here');
//cout << "Hello World!"; //just put this here to remember the c++ connection

const addFunction = require('./add.js');

console.log('Sum of 100 and 56: '+addFunction(100,56));
console.log('Sum of 15 and 76: '+addFunction(15,76));

const fruitFunction = require('./fruit_generator.js');

console.log(fruitFunction.getName());
fruitFunction.setName("Apple");

console.log(fruitFunction.getName());
fruitFunction.setName("Orange");

console.log(fruitFunction.getName());


const Fruit = require('./fruit_generator.js');

//using the entire class export
//const sourFruit = new Fruit("Lemon");
//console.log(sourFruit.getName());
const fs = require('node:fs/promises'); 

console.log("This...");
const txtContent = "\nKiwi";

fs.readFile('Node_JS_Practice/texts/fruits.txt', "utf-8")
    .then( (data) => console.log(data))
    .catch( (error) => console.log(error));


fs.writeFile('Node_JS_Practice/texts/fruits.txt', txtContent, {flag: "a"})
  .then(() => {
    console.log("File written successfully!");
  })
  .catch(err => {
    console.error("Error writing file:", err);
  });

//Alternatively creating using a async
async function readFile() {
    try {
        const data1 = await fs.readFile('Node_JS_Practice/texts/fruits.txt', "utf-8");
        console.log("Second Time: ");
        console.log(data1);
    } catch (error) {
        console.log(error);
    }
  }
readFile();

/*const fileSystem = require("node:fs");

//Sync File Handling
const readFile = fileSystem.readFileSync("Node_JS_Practice/texts/stuff.txt", "utf-8"); //add utf-8 to get the actuall content and not the hex values stored in the buffer
console.log(readFile);

//Async File Handling
fileSystem.readFile("Node_JS_Practice/texts/stuff.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

//Writing to a file
const rytText = `${readFile}\nHighest praises Yah Adonai. \nAlways, this is true! Created on ${Date.now()}.`;
fileSystem.writeFileSync('Node_JS_Practice/texts/stuff.txt', rytText);

//Events Module
const PizzaShop = require('./pizza_shop.js');

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order recieved! baking a ${size} pizza with ${topping}`);
});

pizzaShop.order("large","mushrooms");
pizzaShop.displayOrderNumber();


*/

/*
const EventEmitter = require("node:events");//class to create event emitters

const emittter = new EventEmitter();//an event emitter object created that can then emit events

//Event listner to listen for an emitted event of a specific name("Pizza-Order"), takes in parameters size and topping
emittter.on("Pizza-Order", (size, topping) => {
    console.log(`Order recieved! baking a ${size} pizza with ${topping}`);
});

//Event listner to listen for an emitted event of a specific name("Pizza-Order"), takes in parameters size
emittter.on("Pizza-Order", (size) => {
    if(size === "large"){
        console.log(` - You get a complementary gift!`);
    }
});

//Event listener for an event drinks-bar, takes in parameters sugar and type
emittter.on("Drinks-Bar", (sugar,type) => {
    if(sugar === true){
        console.log(` - You ordered a ${type}`);
    }else{
        console.log(` - You ordered a ${type} with no sugar`);
    }  
});

console.log("  Drinks and Pizza");
console.log("=====================");
emittter.emit("Pizza-Order","large","caramelized-onions");//event pizza-order
emittter.emit("Drinks-Bar", true,"virgin-mojito");//event drinks-bar
emittter.emit("Drinks-Bar", false, "Coke");

*/
//Microtask Queues Experiments

setTimeout(() => console. log("\nthis is setTimeout 1"), 0);
setTimeout(() => console.log("this is setTimeout 2"), 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

Promise.resolve().then(() => console.log("\nPromise.resolve: "));
process.nextTick(() => console.log("process.nextTick: "));
/*
console.log("message 1");
process.nextTick(() => console.log("process.nextTick 1"));
console.log("message 2");
*/

process.nextTick( () => console. log("this is process.nextTick 1"));
process.nextTick(() => {
    console. log("this is process.nextTick 2");
    process.nextTick(() => 
        console. log("this is the inner next tick inside next tick")
    );
    process.nextTick(() => console.log("this is process.nextTick 3"));
});

Promise.resolve().then(() => console. log("this is Promise. resolve 1"));
Promise.resolve().then(() => {
console. log("this is Promise.resolve 2");
    process.nextTick(() =>
        console. log("this is the inner next tick inside Promise then block")
    );  
});

Promise.resolve().then(() => console.log("this is Promise.resolve 3")) ;

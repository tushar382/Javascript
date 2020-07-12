// Asynchronous Programming
// 1. Async / await   2.callbacks   3.promises

//Synchronous way
for (let index = 0; index < 4500; index++) {
  const element = index;
  console.log("This is index number" + index);
}
console.log("Done Printing with Synchronous way");

//Asynchronous way
setTimeout(() => {
  for (let index = 0; index < 4500; index++) {
    const element = index;
    console.log("This is index number" + index);
  }
}, 100);
console.log("Done Printing Asynchronous way");

# About
Here I implemented the promiseReduce() function that takes an array of async functions, a reducing function and an initial value. It executes async functions one-by-one and then calls reduce() for the last async function's result. Finally it returnes a promise with the reduced value.

# Description
I created async launch() function to be able to use await promiseReduce() inside it. The promiseReduce() itself is also async to call async functions (that return promises w/ numbers) using await. Finally we return a promise with the final value and print it to console.

# How to
Launch javascript-2.html file and check the console.

# Notes
It was quite difficult to get my head round this promise/async/await concept and to build a correct code architecture.
'use strict'

var minDelay = 1500;
var maxDelay = 4000;
var initialValue = 2;

const firstNumber = () => {
  console.log(`Returning the first number...`);

  return new Promise(
    resolve => setTimeout(
      () => resolve(1),
      Math.random() * (maxDelay - minDelay) + minDelay
    )
  );
};

const secondNumber = () => {
  console.log('Returning the second number...');

  return new Promise(
    resolve => setTimeout(
      () => resolve(-7),
      Math.random() * (maxDelay - minDelay) + minDelay
    )
  );
};

const thirdNumber = () => {
  console.log('Returning the third number...');

  return new Promise(
    resolve => setTimeout(
      () => resolve(12),
      Math.random() * (maxDelay - minDelay) + minDelay
    )
  );
};

const reduceFunction = (memo, value) => {
  console.log('Reducing...');
  return memo + value;
}

async function promiseReduce(asyncFunctions, reduceFunction, initialValue) {
  let curValue = initialValue;
  let curNumber;

  for (const curAsyncFunc of asyncFunctions) {
    curNumber = await curAsyncFunc();
    curValue = reduceFunction(curValue, curNumber);
  }

  return Promise.resolve(curValue);
}

async function launch() {
  const result = await promiseReduce(
    [firstNumber, secondNumber, thirdNumber],
    reduceFunction,
    initialValue
  );

  console.log(`The result is ${result}`);
}

launch();
/*
A Promise is a Promise
https://www.codewars.com/kata/5b61d6ef07a266d40b000097/train/javascript

Create a resolved javascript Promise that will return 'Hello World!'.

*/

promiseHelloWorld=()=>Promise.resolve("Hello World!")
// Or using async/await
promiseHelloWorld=async()=>'Hello World!'
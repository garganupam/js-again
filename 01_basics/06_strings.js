const name="Anupam"
const repoCount=50

// console.log(name+repoCount+" what is this")

//STRING INTERPOLATION
// console.log(`Hey ,My name is ${name} and my repoCount is ${repoCount}`)  //prefer this one

const answer=new String("Anupam-Garg-Sharma")
console.log(answer);
console.log(typeof answer) // answer not a string , it is an object here with key  pair value ,can check on console.

console.log(answer[0]);
console.log(answer.__proto__) // It will show an empty object but it is not

//Accessing of methods

// console.log(answer.length)
// console.log(answer.toUpperCase())
// console.log(answer.charAt(2))
// console.log(answer.indexOf('u'))

const newString=answer.substring(0,3);//cannot give negative objects
// console.log(newString);

const anotherString=answer.slice(-11,4);
// console.log(anotherString);

const newStringOne="  Anupam   "
// console.log(newStringOne);
// console.log(newStringOne.trim())//it trims down the spaces

const url="http:/anupam.com/anupam%20garg"
// console.log(url.replace('%20','-'))//use to replace the value of something via something in the link

// console.log(url.includes('anupam'));

console.log(answer.split('-')) //takes two argument split on what and raange till split needs to happen
const score=400
// console.log(score)//400

const balance=new Number (100)
// console.log(balance)//It will define in this output as number in key value pairs

// console.log(balance.toString());// will not define and give only string
// console.log(balance.toString().length)//3

//One more method is toFixed() used in e-commerce application to give the precise value of the payments
// console.log(balance.toFixed(2))//upto which level is the input//100.00

const otherNumber=22.8493
// console.log(otherNumber.toPrecision(2))//upto which digit you need precesion,check the results and then give the input that till when precesion needed

const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'))//en-IN means value represented using indian standard ,default is US.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Find the methods of Math in console of a page

// console.log(Math)//itself an object contains many functions
// console.log(Math.PI)//access their methods

// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.6))//5

// console.log(Math.ceil(4.2));
// console.log(Math.floor(5.6));

// console.log(Math.min(4,6,3,7,8));

//************IMP**************** */
// console.log(Math.round(Math.random()*10));
// console.log(Math.round(Math.random()*10));
// console.log(Math.round(Math.random()*10));

//To get a value between two numbers

const min=4;
const max=10;
console.log(Math.floor(Math.random()*(max-min+1))+min)//to get a value between min and max








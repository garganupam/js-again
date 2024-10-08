const numbers=["1","2","3"]
const alpha=["a","b","c"];

// const c=numbers.concat(alpha);

//***** Another way to conactenate */

const all=[...numbers, ...alpha] //after this all the elements in the array are shreded
// console.log(all)

const array=[2,3,4,[4,5]]
const another_array=array.flat(Infinity)
// console.log(another_array);

//** In case of web scraping when your data,comes in another format then you can convert it into array */
console.log(Array.isArray("Anupam Garg"))//true or false
console.log(Array.from("Anupam Garg"))

//Imp: When an object is passed into this ,then it gives an empty array because it needs validation whether keys array will be made or value array will be made



let s1=100
let s2=100
let s3=100

console.log(Array.of(s1,s2,s3))

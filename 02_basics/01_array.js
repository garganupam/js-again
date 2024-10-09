//Array

//Arrays in javascript are dynamic in nature

const myArr=[0,1,2,3,4,5]
const myHeros=["Shaktiman","Naagraj"]
// console.log(myArr)

const myArr2=new Array(1,2,3,4)
// console.log(myArr[2]);
// console.log(myArr2[2])


//***********Methods******************* */

// myArr.push(6);
// myArr.push(7);
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

//Unshift adds the element in the front of array

// myArr.unshift(8);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

//include tells that it containes that particukar element or not

// console.log(myArr.includes(9))
// console.log(myArr.includes(4))//gives boolen result
// console.log(myArr.indexOf(3))//gives index of that element


// const newArray=myArr.join()
// console.log(myArr)
// console.log(newArray)//join converts it into string
// console.log(typeof newArray)


//*******Slice and Splice ********************** */
console.log("Original array",myArr)

const myn1=myArr.slice(1,3);
console.log(myn1);// 3 excluding

const myn2=myArr.splice(1,3)
console.log(myn2);//In case of splicing the whole part will be out of the array,here the original array gets manipulated

console.log(myArr)



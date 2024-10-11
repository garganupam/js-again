//foreach loop

const coding=["java","ruby","python","cpp"]

// coding.forEach(function (i){ //it will traverse the whole array  
//     console.log(i)
// })

coding.forEach( (i) => {
    // console.log(i)
})

function printme(item){
    // console.log(item);
}

// coding.forEach(printme)//not printme() (function() is not passed only parameters are passed)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const coding1 =["js","ruby","java","python"]

const values=coding1.forEach((item1)=>{
    // console.log(item1)
    return item1;
     //foreach loop does not return any value
})
// console.log(values)//undefined as it does not return anything

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//filter() operations
const Nums=[1,2,3,4,5,6,7,8,9]
const myNums=Nums.filter((nums2)=>{
    return nums2>6        //explicit return main return keyword add jrur kren implicit main na bhi kar skte hain.
})

// console.log(myNums);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const news = myNumbers.map((nums)=>nums+10)
console.log(news);


const newsNums=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newsNums);


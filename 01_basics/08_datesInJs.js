//Dates

let myDate= new Date()
// console.log(myDate.toString());//date and time in 24 hrs category
// console.log(myDate.toDateString())//only date
// console.log(myDate.toLocaleString());//both date and time in 12 hour format
// console.log(typeof myDate) //date is an object


let myCreatedDate=new Date(2023,0,23)//year , month,date
let myCreatedDate1=new Date(2023,0,23,5,3)//year,month,date,hours,minutes
let myCreatedDate2=new Date("2023-01-14")     //yyyy/mm/dd
let myCreatedDate3=new Date("01-14-2023") // mm/dd/yy    ********** We prefer this more in india  ***********

// console.table([myCreatedDate.toLocaleString(),myCreatedDate1.toLocaleString(),myCreatedDate2.toLocaleString(),myCreatedDate3.toLocaleString()]);



//********************TIMESTAMP************************** */

let myTimeStamp=Date.now()//gives time in ms from date from 1st janurary 1970
// console.log(myTimeStamp);

//if we want to compare dates then convert into the time
// console.log(myCreatedDate.getTime());//gives times in ms from 1jan 1970 till this date

// we can convert this time to anything

// console.log(Math.floor(Date.now()/1000));//in seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()); //months starts from zero
console.log(newDate.getDay());

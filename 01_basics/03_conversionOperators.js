let score="22abc"
let score1=null
let score2=undefined;
//console.log(typeof score);

let valueInNumber=Number(score)//way to convert it into another type
let value2=Number(score1);
let value3=Number(score2);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);//Make sure that dont rely on these conversion in js as it will show string part as a number after a conversion but it is not.
console.table([valueInNumber,value2,value3]);

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 =>true , 0=>false
//""=> false
//"Anupam"=>true



// ... are called rest or spread operator depends on the use case

function calculateCartPrice(val1,...num1){ //by using ...num1 the values given are all alone and collected by num1 ,and val1 takes value accordingly as assigned and rest num1 took
    console.log(val1);
    return num1
}

console.log(calculateCartPrice(200,300,303,344))

const user={
    username:"jkfnakw",
    price:"313"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({            //function call without making user object
    username:"jdjkdckjn",
    price:"jscjc"
})

//*********Passing array in functions************************ */

const array=[200,33,4,3,33,332,22,32]

function returnSecondValue(getarray){
    return `v2nd value in the array is ${getarray[1]}`

}
console.log(returnSecondValue(array));


//+++++++++++++Important concept++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1;
}

//Other way

console.log(addtwo(5));

const addtwo= function(num){    //In this way before intialization you cant call a function above of initialization in the code.
    return num+2
}
//How Function Hoisting Works:
//In JavaScript, function declarations are hoisted to the top of their scope. This means that the JavaScript engine moves the entire function definition (not just the name) to the top of the scope during the compile phase. As a result, you can call the function before its actual declaration in the code.



// function addToNumbers(number1,number2){  //no need to define parameters type in js
//     console.log(number1+number2)
// }


// addToNumbers(3,4); //7
// addToNumbers(3,"4")//34
// addToNumbers(3,null)//3    //arguments

// const result=addToNumbers(3,4)
// console.log(result);//undefined giving as this function is not returning anything only printing the values.


function add(num1,num2){
     return (num1+num2)
}
console.log(add(33,33));

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter your username");
        return
    }
        
    return `The user ${username} is trying to logged in`
}
console.log(loginUserMessage("Anupam"))
console.log(loginUserMessage())//if we do not pas anything then gives null





//IIFE Immediately invoked function expression
//sometimes in function there may be pollution in the function due to variables of the global scope of immeditely invoked functions then we use this iife concept
(function chai(){         //named iife
    console.log(`DB connected`)
})();

//Now it is an immediately invoked function,so it does not where to stop so , ; will be put at the end of the function

((name)=>{//param passed here
    console.log(`Anupam is here ${name}`)  //first bracket represntes function name and second represents ()its call
})('hitesh')//argument given here
// <!-- check out on mdn docs for the definition -->
// A promise is an object that represents eventual completion or failure of an asynchronous operation

const promiseOne=new Promise(function(resolve,reject){
    //DO an async task
    //DB calls,cryptography,network
    setTimeout(() => {
        console.log('Async task is complete')
        resolve();
        
    }, 3000);
})

    promiseOne.then(function(){
        console.log("promise consumed")
    })


    //if we write resolve,only then it will be connected to .then() function,.then  respresents that after thr promiseOne is completed ,we can execute this statement.

    //writing promise without putting it into a variable
    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Async function is completed')
            resolve();
        },4000)
    }).then(function(){
        console.log("Task is completed")
    })

    //promise 3
    //Data came will be sent as an object after it is completed

    const promiseThree=new Promise(function(res,rej){
        setTimeout(function(){
            res({usename:"Anupam Garg",Quality:"best in the world"})
        },5000)
    })

    promiseThree.then(function(user){
        console.log(user);
    })


  ////Promise 4

    const promiseFour=new Promise(function(resolve,reject){
        setTimeout(() => {
            let error =false;
            if(!error){
                resolve({username:"Anupam",password:"Garg"})
            }
            else{
                reject("OOPS! Something went wrong")
            }
            
        }, 6000);
    })

    promiseFour.then(function(user){  //whatever is returning through this function can be accessed by using chaining by applying .then after before then
        console.log(user);
        return user.username;
    })
    .then((username)=>{         //here username is put only as it got returned from first then
        console.log(username); 
    
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>console.log("Finally promise is either resolved or rejected"))



    //Promise 5

    const promiseFive=new Promise(function(resolve,reject){
        setTimeout(() => {
            let error =true;
            if(!error){
                resolve({username:"Anupam",password:"Garg"})
            }
            else{
                reject("OOPS! Something went wrong")
            }
            
        }, 6200);

    })
  //we dont handle catch grecefully here

  //async and await cannot handle the errors directly,so put that in try catch block
     async function consumePromiseFive(){
        try{
        const response=await promiseFive;        //until promiseFive does not given response code will not move further
        console.log(response);
        }
        catch(error){
        console.log(error);
     }
    }
     consumePromiseFive();


     //Point: When the data is converted to json format through the string format then also it takes some time that can be handled by using await function.

    //  async function getAllUsers(){
    //     try{
    //         const response= await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data=await response.json();
    //         console.log(data);
    //     }
    //     catch(error){
    //         console.log("Error: ", error);
    //     }

    //  }
    // getAllUsers();



    // ----or

    fetch('https://jsonplaceholder.typicode.com/users').then((user)=>{
        return user.json();
    }).then((response)=>{
        console.log(response); //ye then tabhi start hoga jab iska pichla then khtam hoga
    })
    .catch((e)=>{
        console.log(e);
        
    })
    //The promise returned by fetch() will reject on some errors, such as a network error or a bad scheme. However, if the server responds with an error like 404, then fetch() fulfills with a Response, so we have to check the status before we can read the response body.
    
    // check mdn docs
// const promiseOne=new Promise (function(resolve,reject){

//     setTimeout(() => {
//         console.log("Async task is complete")
//         resolve()
//     }, 2000);
// });

// promiseOne.then(function(){
//     console.log("Promise completed")
// })

////////////////////////////////////////////////////////////////////////////////
// const promisetwo=new Promise(function(resolve,reject){

//     setTimeout(() => {
//         resolve({username:'Anupam', email:'chai@exampe.com'})
//     }, 2000);
// })

// promisetwo.then(function(user){
//     console.log(user)
// })

///////////////////////////////////////////////////////////////////////////////////

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false

//         if(!error)
//             resolve({username:'Anupam',email:'chai@chai.com'})
//         else
//             reject("Error: Something went wrong")
//     },2000)
// })

// promiseThree.then(function(user){
//     return user.username
// })                                      // the value returned from above then will be given to next as a chain
// .then(function(username){
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sometimes we handle the promise with async await also instead of .then 

// const promiseFive=new Promise (function(resolve,reject){

//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"javascript",password:"An123"})
//         }
//         else{
//             reject("Js went wrong ")
//         }
//     },1000)

// })

// async function promise5(){
//    try {
//     const response= await promiseFive
//     console.log(response)
//    } catch (error) {
//     console.log(error)
//    }
// }

// promise5()


////////////////////////////////////////////////////////////

// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')

//         const data=  await response.json()  // not only settimeout functions take time , time can be taken by any call , so we need to add fetch there
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()


///////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ return response.json()})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
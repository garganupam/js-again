//singleton    and object literals through these objects are created.

// ****Create through Object.create,Here singleton object is created

const mySym = Symbol("key 1")

  const JsUser={
    name:"Anupam", //name is also a string here.
    [mySym]:"mykey1" ,   //symbol writing uses this syntax
    age:19,
    location:"Himachal",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
  }

  //How to access these values

  console.log(JsUser.age)
  console.log(JsUser.name); //because name is taken as string here as above mentioned
  console.log(JsUser[mySym]) //cannot direct

  //***Interview Question******* */
  //Create a symbol and then add it into object and then print it as a key of object,so done it this way

  //If you want to change the values of keys

  JsUser.age=20;
  console.log(JsUser.age)

  //If you do not want any changes to happen then use freeze method
// Object.freeze(JsUser)

JsUser.greeting=function(){   //Just like greeting is a var. in JsUser and it is assigned a function that returns the value
    console.log("Hello js user")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js user ${this.name}`)
}

console.log(JsUser.greeting) //Function[anonymous]
console.log(JsUser.greeting())//Hello Js user
console.log(JsUser.greetingTwo())



  

  

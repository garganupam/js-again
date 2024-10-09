const user={
    username:"Anupam",
    price:"999",
    WelcomeMessage:function(){ //The this keyword is often used in object-oriented programming to refer to properties or methods of an object from within that object itself.
        console.log(`${this.username} Welcome to this website `);//this is refering to context of the current values under a scope
        console.log(this);//this refering to whole object
    }
}
// user.WelcomeMessage()
// user.username="dfisdjb"
// user.WelcomeMessage()
console.log(this)//here current context is empty as it is refering to node environment and here the context is empty

//browser k andr jo global object hai vo hai window object, so whn par console.log(this) karne k baad WIndow show hota hai kyuki vhn js browser par run ho rhi hai



//+++++++++++++++

function chai(){
    const vary="jsdjsdnj"
    // console.log(this.vary)//this wont work here too
}
chai();///wont work here
 const chai2=()=>{
    let username1="jdsfsj"
    // console.log(this.username)//this wont work here
 }
 chai2();


 //++++++++++Arrow functions+++++++++++++

 const add=(num1,num2)=>{
    return num1 +num2;

 }
//  console.log(add(1,2))

//Another way to write arrow function is called implicit return

const addtwo =(num3,num4) => (num3+num4)
console.log(addtwo(4,6))

//object ko arrow function main return karne k lie usko parenthesis main wrap karna hi pdega
const vo={username2:"sdjdb"}
const vargs=()=>(vo)

console.log(vargs())


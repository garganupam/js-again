const clock=document.getElementById('clock')

// let date=new Date();
// console.log(date.toLocaleTimeString());



//method which asks timings after what interval a particular thing needs to run


setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)
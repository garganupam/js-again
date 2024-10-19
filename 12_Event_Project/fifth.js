 //background color changer and stopper through a button
 const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
}

let changeColor;
const startColorChanging=function(){
    if(!changeColor)
        changeColor=setInterval(changeBgColor,500);
    
}
// In JavaScript, if you assign a value to a variable without declaring it explicitly (i.e., without let, const, or var), it will indeed create a global variable
const stopChangingColor=function(){
    clearInterval(changeColor);
    changeColor=null;
}

document.querySelector("#start").addEventListener('click',startColorChanging
)
document.querySelector("#stop").addEventListener('click',stopChangingColor);

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'

    for(let i=0;i<6;i++){
       color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let start
const startChangingColor=function(){
    if(!start) start=setInterval(changeBgColor,100);

    function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
    }
}


const stopChangingColor=function(){
    clearInterval(start,1000)
    start=null;
}

document.querySelector('#Start').addEventListener('click',startChangingColor)
document.querySelector('#Stop').addEventListener('click',stopChangingColor)
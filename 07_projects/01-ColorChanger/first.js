const buttons=document.querySelector('.buttons')
const body=document.querySelector("body")

buttons.forEach(function(e){
    if(e.target.id==='grey'){
        body.style.background=e.target.id;
    }
    if(e.target.id==='white'){
        body.style.background=e.target.id;
    }
    if(e.target.id==='yellow'){
        body.style.background=e.target.id;
    }
    if(e.target.id==='blue'){
        body.style.background=e.target.id;
    }

})
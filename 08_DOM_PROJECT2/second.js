const form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    const results=document.querySelector('#results');

    //check whether the input given is valid or not

    if(height===' '||height<0||isNaN(height)){
        results.innerHTML=`${height} is not a valid height`
    }
    else if(weight===' '||weight<0||isNaN(weight)){
        results.innerHTML=`${weight} is not a valid weight`
    }
    else{
        const bmi=(weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            // document.querySelector("#one").style.backgroundColor="red"
            results.innerHTML=`<span>${bmi} (Underweight)</span>`


        }
        else if(bmi>18.6 && bmi<24.9){
            // document.querySelector("#two").style.backgroundColor="green"
            results.innerHTML=`<span>${bmi}(Normal Range)</span>`

        }
        if(bmi>24.9){
            // document.querySelector("#three").style.backgroundColor="red"
            results.innerHTML=`<span>${bmi}(Overweight)</span>`

        }
    }

    
})
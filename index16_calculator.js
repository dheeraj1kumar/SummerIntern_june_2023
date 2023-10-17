
/*
const buttons = document.querySelectorAll('buttons');

const screen = document.getElementById('screen');

for(let button of buttons){

    button.addEventListener('click',function(e){
        console.log(e.target.innerText);

const buttonText = e.target.innerText;

if(buttonText==='C'){
screen.value="";
}
else if(buttonText==='X'){
    screen.value+='*';
}
else if(buttonText==='='){
    try{

    
    screen.value = eval(screen.value);
    }
   catch(e) {
console.log("Invalid expression!..")
    }
}
else{
    screen.value+=buttonText;
}



    });
}
*/






(function(){



    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equle=document.querySelector('.btn-equle');


buttons.forEach(function(button){
    button.addEventListener('click',function(e){
let value=e.target.dataset.num;
screen.value+=value;

    })
});

equle.addEventListener('click',function(e){
    if(screen.value===''){
        screen.value="";
    }else{
        let answer=eval(screen.value);
        screen.value=answer;
    }
})

clear.addEventListener('click',function(e){
    screen.value="";

})

})(); 
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));

buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        const value=e.target.innerText;
        if(value==='c'){
            display.value='';

        }else if (value==='='){
            display.value=eval(display.value);
        }else{
            display.value+= value;
        }
    });
});
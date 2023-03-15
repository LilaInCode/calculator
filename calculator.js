const display=document.querySelector('.display');
const keyboard=document.querySelector('#keyboard');
const seven=document.querySelector('#seven');
const eight=document.querySelector('#eight');
const nine=document.querySelector('#nine');
const divide=document.querySelector('#divide');
const four=document.querySelector('#four');
const five=document.querySelector('#five');
const six=document.querySelector('#six');
const multiple=document.querySelector('#multiple');
const one=document.querySelector('#one');
const two=document.querySelector('#two');
const three=document.querySelector('#three');
const subtract=document.querySelector('#subtract');
const point=document.querySelector('#point');
const zero=document.querySelector('#zero');
const equal=document.querySelector('#equal');
const add=document.querySelector('#add');
let currentOperator=null;
let result=0;
let currentArgument=null;
let calculationOver=false;
let newDisplay=true;
seven.textContent='7';
eight.textContent='8';
nine.textContent='9';
divide.textContent='/';
four.textContent='4';
five.textContent='5';
six.textContent='6';
multiple.textContent='x';
one.textContent='1';
two.textContent='2';
three.textContent='3';
subtract.textContent='-';
point.textContent='.';
zero.textContent='0';
equal.textContent='=';
add.textContent='+';

const numbers=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator')
const del=document.querySelector('.delete');
const clear=document.querySelector('.clear');
const allButtons=document.querySelectorAll('.number,.operator,.delete,.clear');

numbers.forEach(number=>number.addEventListener('click',()=>displayValue(number.textContent)));
operators.forEach(operator=>operator.addEventListener('click',()=>operation(operator.textContent)));
allButtons.forEach(button=>button.addEventListener('mouseup',()=>button.classList.remove('changecolor')));
allButtons.forEach(button=>button.addEventListener('mousedown',()=>button.classList.add('changecolor')));
del.addEventListener('click',resetDisplay);
clear.addEventListener('click',clearNumber);
equal.addEventListener('click',calculating);
window.addEventListener('keydown',keyboardFunction)

function keyboardFunction(e){
    if(e.key<=9&&e.key>=0||e.key==='.') displayValue(e.key)
    if(e.key==='+'||e.key==='-'||e.key==='*'||e.key==='/') operation(convertOperator(e.key))
    if(e.key==='Backspace') clearNumber()
    if(e.key==='Escape') resetDisplay()
    if(e.key==='='||e.key==='Enter') calculating()
}

function convertOperator(o){
    if(o==='+') return '+'
    if(o==='-') return '-'
    if(o==='*') return 'x'
    if(o==='/') return '/'
    }

function displayValue(n){
    if (calculationOver||currentOperator&&!newDisplay) {resetDisplay();
    }
    display.textContent+=n;
    newDisplay=true;
}

function clearNumber(){
   return display.textContent=display.textContent.slice(0,-1);
}

function operation(o){
    if (currentOperator) calculating(); 
    currentOperator=o;
    result=display.textContent;
    newDisplay=false;
}

function adding(a,b){
return Number(a)+Number(b);
}
function subtracting(a,b){
    return a-b;
}
function mulitplying(a,b){
    return a*b;
}

function dividing(a,b){
    if(Number(b)===0) return 'error'
    else return (a/b).toFixed(2);
}

function resetDisplay(){
    display.textContent='';
    calculationOver=false;
    newDisplay=true;
}

function calculating(){
    currentArgument=display.textContent;
    previousArgument=result;
    switch(currentOperator){
        case '+': result=adding(previousArgument,currentArgument); break;
        case '-': result=subtracting(previousArgument,currentArgument); break;
        case '/': result=dividing(previousArgument,currentArgument); break;
        case 'x': result=mulitplying(previousArgument,currentArgument); break;
    };
    currentOperator=null;
    display.textContent=result;
    calculationOver=true;
    newDisplay=false;
}
const calc = document.querySelector('.calc');
const result = document.querySelector('#res');
let flag = false;
let operation;
let firstParam;
calc.addEventListener('click', function(event) {

if(!event.target.classList.contains('calc_btn')) return;

const value = event.target.innerText;
switch(value) {
    case 'C':
        result.innerText = '';
        break;
        
    case '=':
        if(result.innerText.search(/[^0-9*/+-]/mi) != -1) return;
        flag = true;
        let resEval = eval(firstParam+operation+result.innerText).toFixed(1);
        if(resEval == 'Infinity'){
            result.innerText = 'Error';
        }else{
            result.innerText = resEval;
        }
        break;
    case '/':
        operation = '/';
        firstParam = result.innerText;
        flag = true;
        break;
    case '+':
        operation = '+';
        firstParam = result.innerText;
        flag = true;
        break;
    case '*':
        operation = '*';
        firstParam = result.innerText;
        flag = true;
        break;
    case '-':
        operation = '-';
        firstParam = result.innerText;
        flag = true;
        break;
        
    default:
        if(operation != null && flag){
            result.innerText = '';
            flag = false;
        }
        if(result.innerText.length >= 9){
            break;
        }
        result.innerText += value;
}
});
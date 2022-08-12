console.log('version 1.00');

//define os botoes
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');

var btnSum = document.getElementById('btnSum');
var btnEqual = document.getElementById('btnEqual');
var btnClear = document.getElementById('btnClear');
var btnMinus = document.getElementById('btnMinus');
var btnMult = document.getElementById('btnMult');

//pega o valor do input
var inputVal = document.getElementById('inputMain');
inputVal.focus();

//Array para armazenar os resultados
var sum = [['+',0]];

//Última operação antes do igual
var lastOperator = '+';

//Ação dos botões
btn1.onclick = fncBtn1;

btnSum.onclick = function (){
    fncBtSum('+');
};

btnMinus.onclick = function (){
    fncBtSum('-');
};

btnMult.onclick = function (){
    fncBtSum('*');
};

btnEqual.onclick = fncBtnEqual;
btnClear.onclick = fncBtnClear;


//Criação das funções
function fncBtn1() {
    inputVal.value += this.value;
}

function fncBtSum(operador) {

    var value = inputVal.value;
    
    sum.push([lastOperator, parseFloat(value)] );
    inputVal.value = null;
    lastOperator = operador; 
    inputVal.focus();   
}


function fncBtnEqual(){
    var result = 0;
        
    sum.push([lastOperator , parseFloat(inputVal.value) ]);
    

    sum.forEach(element => {

        var num = 0 ;
        num = parseFloat(element[1]);

        switch (element[0]) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result = result * num;
                break;
        
            default:
                break;
        }
        
    });  
    
    console.log(sum);
    sum = [];
    lastOperator = '+';
    
    inputVal.value = result;
   
}

function fncBtnClear(){
    inputVal.value = null;
    sum = [];
    inputVal.focus();
}

function removeCaracteres(input){
    return input.replace('+','');
}



//Funções tecla de atalho
window.addEventListener("keydown", function (event) {  

    //console.log(event.key);

    switch (event.key) {
        case '+':
            btnSum.click();
            break;
        case '-':
            btnMinus.click();
            break;
        case '*':
            btnMult.click();
            break;
        case 'Enter':
            btnEqual.click();
            break;
        case 'Delete':
            btnClear.click();
            break;
    
        default:
            break;
    }
  
  });


  //Função para permitir apenas números no input
  function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if ( (charCode >= 48 && charCode <= 57) || charCode == 46) {
        return true;
    }

    return false;
    
}
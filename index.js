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

//pega o valor do input
var inputVal = document.getElementById('inputMain');

//Array para armazenar os resultados
var sum = [];
var minus = [];

//Última operação antes o igual
var lastOperator = '';

//Ação dos botões
btn1.onclick = fncBtn1;
btnSum.onclick = fncBtSum;
btnEqual.onclick = fncBtnEqual;
btnClear.onclick = fncBtnClear;
btnMinus.onclick = fncBtnMinus;


//Criação das funções
function fncBtn1() {
    inputVal.value += this.value;
}

function fncBtSum() {
    sum.push( parseFloat(inputVal.value) );
    inputVal.value = null;
    lastOperator = this.value;
    
}

function fncBtMinus() {
    sum.push( parseFloat(inputVal.value) );
    inputVal.value = null;
    lastOperator = this.value;
    
}

function fncBtnEqual(){
    var result = 0;

    switch (lastOperator) {
        case '+':
            sum.push( parseFloat(inputVal.value) );
            break;
    
        default:
            break;
    }

    sum.forEach(element => {
        result += element;
        console.log(element);        
    });

    inputVal.value = result;
    sum = [];
   
}

function fncBtnClear(){
    inputVal.value = null;
    sum = [];
}




console.log('version 1.00');

var arrayteste = [['+',2]];
arrayteste.push(['+',3]);
arrayteste.push(['-',2]);
arrayteste.push(['*',2]);
arrayteste.push(['*',3]);
arrayteste.push(['-',10]);
arrayteste.push(['-',12]);
arrayteste.push(['*',10]);
arrayteste.push(['+',45]);

var resultado = 0;

arrayteste.forEach(element => {
    var num = parseFloat(element[1]);
    
    switch (element[0]) {
        case '+':  
            resultado += num;
            break;    
        case '-':            
            resultado += num*-1;
            break;    
        case '*':            
            resultado = (resultado*num);
            break;    
        default:
            break;
    }

    
    console.log(element[0] +'  '+element[1] + ' '+resultado);
});

console.log('Resultado: '+resultado);

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
inputVal.focus();

//Array para armazenar os resultados
var sum = [];

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

btnEqual.onclick = fncBtnEqual;
btnClear.onclick = fncBtnClear;


//Criação das funções
function fncBtn1() {
    inputVal.value += this.value;
}

function fncBtSum(operador) {
    var num = 1;
    var value = inputVal.value;

    if (lastOperator == '-') {
        num = -1;
    }
    
    sum.push( parseFloat(value)*num );
    inputVal.value = null;
    lastOperator = operador;    
}


function fncBtnEqual(){
    var result = 0;
    var num = 1;
    
    if (lastOperator == '-') {
        num = -1;
    }

    sum.push( parseFloat(inputVal.value)*num );

    sum.forEach(element => {
        result += element;
    });  

    inputVal.value = result;
    sum = [];
    lastOperator = '+';
   
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

    console.log(event.key);
    switch (event.key) {
        case '+':
            btnSum.click();
            break;
        case '-':
            btnMinus.click();
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

    console.log(charCode);
    if ( (charCode >= 48 && charCode <= 57) || charCode == 46) {
        return true;
    }

    return false;
    
}
function task1(){
    alert("Вы нажали кнопку");
 }
 function task2(){
    const input = document.search.input1;
    let val = prompt("Введите новый текст для input1 "); 
    input.value = val;
 }
 function task3(){
    const val = document.search.input1.value;
    alert("Содержимое input1: " + val);
 }

task4 = () => alert(Math.pow(document.search.input1.value, 2));

function task5(){
    const input1 = document.search.input1;
    const input2 = document.search.input2;
    let temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
 }

function task6(){
    const button = document.search.button6;
    let val = prompt("Введите новый текст для button6 "); 
    button.value = val;
 }
 function task7(){
    const input1 = document.search.input1;
    input1.style.color = "red";
 }
 task8_Lock = () => document.search.input1.disabled = true;
 task8_Unlock = () => document.search.input1.disabled = false;
function task12(){
    
}
function task13(){
    this.alert("Вы нажали на эту кнопку");
}
function task14(){
    const funcObj = {'func':function() {let val = prompt("Введите текст для input1"); this.value = val;}}
    let func = funcObj.func.bind(document.search.input1)
    func();
}

task15 = () => document.search.button15.disabled = true;

function task16(){
    const button = document.search.button16
    let val = button.value;
    if (isNaN(val)) val = 1;
    else val++;
    button.value = val;
}
task17 = () => document.body.style.cursor = 'grab';

task18 = () => document.getElementById('hide').style.display = 'none';

task19 = () => document.search.button19.style.display = 'none';

function sum(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    alert(`${a} + ${b} = ${a+b}`);
}

function difference(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    alert(`${a} - ${b} = ${a-b}`);
}

function multiply(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    alert(`${a} * ${b} = ${a*b}`);
}

function division(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    alert(`${a} / ${b} = ${a/b}`);
}
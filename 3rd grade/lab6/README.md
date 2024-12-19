<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br><br><br><br><br>
<p align="center"><strong>Лабораторная работа №6. «Модель DOM».</strong></p>
<br><br><br><br><br><br><br><br><br><br><br>
<br>
<p align="right">Выполнил: Рогаль Сергей Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br><br><br>
<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений.JS поддерживают все популярные браузеры. Во frontend-части сайтов язык используют для создания интерактива (анимаций, всплывающих форм, автозаполнения), так как он связан с HTML и CSS и может ими манипулировать. В backend-части с языком JavaScript работают на платформе Node.js. С ее помощью, например, разрабатывают серверные веб-приложения и подключают библиотеки. В поисковике Google на JavaScript работает строка автозаполнения, а Netflix, Uber, eBay используют его в своем backend. Уже 6 лет JS — самый популярный язык среди разработчиков по версии GitHub.
</p>

<h2 align="center">Цели и задачи:</h2>
<ol>
  <li>Сделайте alert по нажатию на кнопку.</li>
  <li>Сделайте изменение текста в input по нажатию кнопки.</li>
  <li>Сделайте вывод содержимого input по нажатию кнопки.</li>
  <li>Сделайте кнопку по нажатию на нее, она выводит alert содержимое input, возведенное в квадрат.</li>
  <li>Сделайте кнопку по нажатию, она осуществляет обмен содержимым между двумя input.</li>
  <li>Сделайте кнопку по нажатию на нее поменяется ее текст.</li>
  <li>Сделайте кнопку по нажатию на нее, она меняет цвет текста в input, используя свойства CSS.</li>
  <li>Сделайте кнопки по нажатию на них, одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.</li>
  <li>Сделайте кнопку при наведении на нее появляется alert.</li>
  <li>Сделайте кнопку при двойном на нее появляется alert.</li>
  <li>Сделайте область с помощью div при наведении на нее появляется alert.</li>
  <li>Сделайте кнопку и картинку, при нажатии кнопки картинка меняется.</li>
  <li>Сделайте alert по нажатию на кнопку. Используя this.</li>
  <li>Сделайте изменение текста в input по нажатию кнопки. Используя this.</li>
  <li>Сделайте кнопку, при нажатии кнопки кнопка блокируется</li>
  <li>Сделайте кнопку, при нажатии кнопка считает количество нажатий на нее.</li>
  <li>Сделайте кнопку, при нажатии курсор мышки должен измениться</li>
  <li>Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id=&quot;hide&quot</li>
  <li>Создайте кнопку, при клике на которую, она будет скрывать сама себя.</li>
  <li>Напишите простой калькулятор.</li>
</ol>
<p>Задачи CodeWars</p>
<ol>
  <li>https://www.codewars.com/kata/the-coupon-code</li>
  <li>https://www.codewars.com/kata/unlucky-days</li>
  <li>https://www.codewars.com/kata/angle-between-clock-hands</li>
  <li>https://www.codewars.com/kata/my-language-skills</li>
  <li>https://www.codewars.com/kata/run-length-encoding</li>
  <li>https://www.codewars.com/kata/walk-the-object-path</li>
</ol>
<palign="justify">Цели: решить задачи с применением языка JavaScript</p>
<palign="justify">Задачи: применить технологии NodeJS.</p>

<h2>Решение задач</h2>

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <script type="text/javascript" src="./script.js"></script>
</head>
<body>
<form name="search">
    <input type="text" name="input1" placeholder="123"></input>
    <input type="text" name="input2" placeholder="in2"></input><br><br>
    <input type="button" name="button1" onclick="task1()" value="Задача 1"><br><br>
    <input type="button" name="button2" onclick="task2()" value="Задача 2"><br><br>
    <input type="button" name="button3" onclick="task3()" value="Задача 3"><br><br>
    <input type="button" name="button4" onclick="task4()" value="Задача 4"><br><br>
    <input type="button" name="button5" onclick="task5()" value="Задача 5"><br><br>
    <input type="button" name="button6" onclick="task6()" value="Задача 6"><br><br>
    <input type="button" name="button7" onclick="task7()" value="Задача 7"><br><br>
    <input type="button" name="button8" onclick="task8_Lock()" value="Задача 8 (блокировать)"> <input type="button" name="button8.1" onclick="task8_Unlock()" value="Задача 8 (разблокировать)"><br><br>
    <input type="button" name="button9" onmouseover="alert('Вы навели на эту кнопку')" value="Задача 9">
    <input type="button" name="button10" ondblclick="alert('Вы дважды нажали на эту кнопку')" value="Задача 10 (dbclick)"><br><br>
    <p>Задание 11 (наведи на область)</p>
    <div id="task11" onmouseover="alert('Вы навели на эту область')"><hr><br><br><hr></div>
    <input type="button" name="button12" onclick="task12()" value="Задача 12??????"><br><br>
    <input type="button" name="button13" onclick="task13()" value="Задача 13"><br><br>
    <input type="button" name="button14" onclick="task14()" value="Задача 14"><br><br>
    <input type="button" name="button15" onclick="task15()" value="Задача 15"><br><br>
    <input type="button" name="button16" onclick="task16()" value="Задача 16(кликай много)"><br><br>
    <input type="button" name="button17" onclick="task17()" value="Задача 17"><br><br>
    <input type="button" name="button18" onclick="task18()" value="Нажмите, чтобы спрятать текст(задача18)"/>
    <div id="hide">Текст</div><br>
    <input type="button" name="button19" onclick="task19()" value="Задача 19"/><br><br>
    <div id="hide">Калькулятор</div><br>
    <p>a: <input type="number" id="num1"></p>
	<p>b: <input type="number" id="num2"></p>
	<button onclick="sum()">+</button><button onclick="difference()">-</button>
	<button onclick="multiply()">*</button><button onclick="division()">/</button>
</form>

</body>
</html>
```
<p>script.js</p>

```javascript
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
```
<p> Задание Node JS: Написать простой сайт о себе c блоками, header, nav, footer, используете три движка pug, handlebars, EJS</p>

```javascript
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const pug = require('pug');
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
hbs.registerPartials(__dirname + "/views/partials");

app.get('/', (req, res) => {
  res.render('ejs-content.ejs');
});

app.get("/hbs", function(req, resp){
    resp.render('main.hbs');
});

app.get("/pug", function(req, resp){
    resp.render('pug-content.pug');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```

<h3>CodeWars</h3>
<p>The Coupon Code</p>

```javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode!==correctCode) return false;
  currentDate = new Date(currentDate).getTime();
  expirationDate = new Date(expirationDate).getTime();
  if(expirationDate-currentDate<0) return false;
  return true;
}
```
<p>Angle Between Clock Hands</p>

```javascript
function handAngle (date) {
  var pi2 = Math.PI*2;
  var m = date.getMinutes()/60, h = (date.getHours()+m)/12;  
  var angle = Math.abs(h-m)*pi2;
  return Math.min( angle, pi2-angle );
}
```
<p>Unlucky Days</p>

```javascript
function unluckyDays(year){
  var count = 0;
  for(let month=0; month<12; month++){
    let date = new Date(year, month, 13);
    if (date.getDay()==5) count++;
  }
  return count;
}
```
<p>My Language Skills</p>

```javascript
function myLanguages(results) {
  var best = [];
  const entries = Object.entries(results);
  entries.sort((a, b) => -a[1] + b[1]);
  for (const [key, value] of entries) {
  if(value>=60) best.push(key);
  }
  return best
}
```
<p>Run-length Encodinge</p>

```javascript
var runLengthEncoding = function(str){
  if (str=="") return [];
  var res = [];
  var first = str[0];
  var count = 1;
  for(let i=1; i<str.length; i++){
    if(str[i]!==first){
      res.push([count, first]);
      first = str[i];
      count=1;
    }
    else count++;
    if(i==str.length-1) res.push([count, first]);
  }
  return res;
}
```
<p>Walk the Object Path</p>

```javascript
function find(object, path) {
  let arrPath = path.split('.');  
  for(let item of arrPath) {
    if(object.hasOwnProperty(item)) object = object[item];
    else return undefined;
  }
  return object;
}
```


<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с Node.js, научился работать с движками EJS, Handlebars, Pug, все поставленные цели были выполнены. </p>

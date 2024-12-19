<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №2 "Основы языка JavaScript" </p>

<p align="right">Выполнил: Рогаль Сергей Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений.JS поддерживают все популярные браузеры. Во frontend-части сайтов язык используют для создания интерактива (анимаций, всплывающих форм, автозаполнения), так как он связан с HTML и CSS и может ими манипулировать. В backend-части с языком JavaScript работают на платформе Node.js. С ее помощью, например, разрабатывают серверные веб-приложения и подключают библиотеки. В поисковике Google на JavaScript работает строка автозаполнения, а Netflix, Uber, eBay используют его в своем backend. Уже 6 лет JS — самый популярный язык среди разработчиков по версии GitHub.
</p>

<h2 align="center">Цели и задачи</h2>
<palign="justify">Цели: разработать программы для выполния заданий</p>
<palign="justify">Задачи: применить технологии JavaScript (Node.js).</p>

<h2>Решение задач</h2>
<pre>
  
/* №1 */
```JavaScript
let name = "Ilya";
console.log( `hello ${1}` ); 
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );
```
/* №2 */
```JavaScript
const express = require("express");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`Твоё имя: ${request.body.userName}`);
});   
app.listen(3000, ()=>console.log("Сервер запущен..."));
```
/* №3 */
```JavaScript
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(`a = ${a} \nb = ${b} \nc = ${c}  \nd = ${d}`);
```
/* №4 */
```JavaScript
a = 2;
let x = 1 + (a *= 2);
console.log(`a = ${a} \nx = ${x}`);
```
/* №5 */
```JavaScript
console.log(`"" + 1 + 0 =${"" + 1 + 0}`);
console.log(`"" - 1 + 0 =${"" - 1 + 0}`);
console.log(`true + false =${true + false}`);
console.log(`6 / "3" =${6 / "3"}`);
console.log(`"2" * "3" =${"2" * "3"}`);
console.log(`4 + 5 + "px" =${4 + 5 + "px"}`);
console.log(`"$" + 4 + 5 =${"$" + 4 + 5}`);
console.log(`"4" - 2 =${"4" - 2}`);
console.log(`"4px" - 2 =${"4px" - 2}`);
console.log(`7 / 0 =${7 / 0}`);
console.log(`"  -9  " + 5 =${"  -9  " + 5}`);
console.log(`"  -9  " - 5 =${"  -9  " - 5}`);
console.log(`null + 1 =${null + 1}`);
console.log(`undefined + 1 =${undefined + 1}`);
console.log(`" \t \n" - 2 =${" \t \n" - 2}`);
```
/* №6 */
```JavaScript
const readline = require('readline-sync');
let a = Number(readline.question("First number "));
let b = Number(readline.question("Second number "));
console.log(a+b);
```
/* №7 */
```JavaScript
console.log(Math.PI);
```
/* №8 */
```JavaScript
const readline = require('readline-sync');
while(true)
{
    let a = readline.question("Type a number (type f to exit): ");
    if (a=='f') break;
    console.log('Вы ввели число: ', Number(a));
}
console.log('Конец');
```
/* №9 */
```JavaScript
const readline = require('readline-sync');
while(true)
{
    let a = readline.question("Type a number (type f to exit): ");
    if (a=='f') break;
    console.log(Number(a), '- вот какое число вы ввели');
}
console.log('Конец');
```
/* №10 */
```JavaScript
a = 10;
console.log(`Периметр квадрата со стороной ${a} равен ${4*a}`);
```
/* №11 */
```JavaScript
let r = 5;
console.log(`Диаметр окружности со радиусом ${r} равен ${2*r}`);
```
/* №12 */
```JavaScript
let R = 6350;
let h = 1;
let distance = (R+h)**2 - R**2
console.log(`Расстояние до линии горизонта от точки с высотой ${h} км над Землей равно ${distance} км`);
```
/* №13 */
```JavaScript
a = 2;
console.log(`Объем куда с ребром ${a} равен ${a**3}, площадь боковой поверхности равна ${4*a*a}`);
```
/* №14 */
```JavaScript
r = 5;
console.log(`Длина окружности с радиусом ${r} равна ${2*Math.PI*r}, площадь круга равна ${Math.PI*r*r}`);

```
/* №15 */
```JavaScript
let num1 = 5;
let num2 = 8;
console.log(`До: num1 = ${num1},  num2 = ${num2}`);
num1+=num2;
num2 = num1 - num2;
num1-=num2;
console.log(`После: num1 = ${num1},  num2 = ${num2}`);
```
/* №16 */
```JavaScript
num1 = 7;
num2 = 9;
console.log(`num1 = ${num1},  num2 = ${num2}`);
console.log(`Среднее арифметическое: ${(num1+num2)/2},  среднее геометрическое: ${Math.sqrt(num1*num2)}`);
```
/* №17 */
```JavaScript
let m = 7;
let v = 0.01;
console.log(`Масса вещества: ${m} кг, объем ${v} м3, плотность: ${m/v} кг/м3`);
```
/* №18 */
```JavaScript
let val = 700000;
let S = 10000;
console.log(`Население государства: ${val} чел, плостность ${S} км2, плотность населения: ${val/S} чел/км2`);
```
/* №19 */
```JavaScript
a = 3;
b = 4;
console.log(`Катеты прямоугольного треугольника: ${a} и ${b}, гипотенуза равна ${Math.sqrt(a*a + b*b)}`);
```
/* №20 */
```JavaScript
r = 3;
R = 5;
console.log(`Внешний радиус кольца: ${R}, внутренний ${r}, его площадь равна ${Math.PI*(R*R - r*r)}`);
```
/* №21 */
```JavaScript
a = 3;
b = 4;
c = Math.sqrt(a*a + b*b);
console.log(`Катеты прямоугольного треугольника: ${a} и ${b}, его периметр равен ${a+b+c}`);
```
/* №22 */
```JavaScript
a = 5;
b = 11;
h = 4;
let temp = (b-a)/2;
c = Math.sqrt(h*h + temp*temp);
console.log(`Основания равнобедренной трапеции: ${a} и ${b}, её периметр равен ${a+b+2*c}`);
```

</pre>
<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с Node.js, лучше стал ориентироваться в нём, кроме того, поработал с библиотекой Express (создал веб-сервер) и Readline(для обработки ввода-вывода), все поставленные цели были выполнены. </p>



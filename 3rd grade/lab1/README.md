<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №1 "JavaScript" </p>

<p align="right">Выполнил: Рогаль Сергей Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений.JS поддерживают все популярные браузеры. Во frontend-части сайтов язык используют для создания интерактива (анимаций, всплывающих форм, автозаполнения), так как он связан с HTML и CSS и может ими манипулировать. В backend-части с языком JavaScript работают на платформе Node.js. С ее помощью, например, разрабатывают серверные веб-приложения и подключают библиотеки. В поисковике Google на JavaScript работает строка автозаполнения, а Netflix, Uber, eBay используют его в своем backend. Уже 6 лет JS — самый популярный язык среди разработчиков по версии GitHub.
</p>

<h2 align="center">Цели и задачи</h2>
<palign="justify">Цели: разработать программы для выполния заданий</p>
<palign="justify">Задачи: применить технологии JavaScript.</p>

<h2>Решение задач</h2>
<pre>
  
/* №1 */
```JavaScript
let str = 'hdfgv'
console.log(str[0])
console.log(str[1])
console.log(str[str.length - 1])
```
/* №2 */
```JavaScript
console.log(60*60)
```
/* №3 */
```JavaScript
let num = 1
num += 12
num -= 14
num *= 5
num /= 7
num += 1
num -= 1
console.log(num)
```
/* №4 */
```JavaScript
let num = 3
console.log(num)
```
/* №5 */
```JavaScript
let a = 10
let b = 2
console.log('a+b=', a+b)
console.log('a-b=', a-b)
console.log('a*b=', a*b)
console.log('a/b=', a/b)
```
/* №6 */
```JavaScript
let c = 15
let d = 2
result = c + d
console.log(result)
```
/* №7 */
```JavaScript
let a = 10
let b = 2
let c = 5
console.log('a+b+c=', a+b+c)
```
/* №8 */
```JavaScript
let a = 17
let b = 10
let c = a - b
let d = 7
let result = c + d
console.log(result)
```
/* №9 */
```JavaScript
console.log('В часе ', 60*60, ' секунд')
console.log('В сутках ', 60*60*24, ' секунд')
console.log('В месяце ', 60*60*24*30, ' секунд')
```
/* №10 */
```JavaScript
let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
console.log(`Текущее время: ${hour}:${minute}:${second}`)
```
/* №11 */
```JavaScript
let num = 10
console.log(num**2)
```
/* №12 */
```JavaScript
console.log([1, 2, 3, 4, 5, 6, 7,8,9,10].filter(n => n % 2 == 0).reduce( (sum, n) => sum + n**0.5, 0 ));
```
/* №13 */
```JavaScript
console.log(1.15 + 2.30 )
```
/* №14 */
```JavaScript
let x = 5; 
console.log(x++)
```
/* №15 */
```JavaScript
console.log([ ] + false - null + true )
```
/* №16 */
```JavaScript
let y = 1
let x = y = 2
console.log(x)
```
/* №17 */
```JavaScript
console.log([ ] + 1 + 2)
```
/* №18 */
```JavaScript
a6 = 5 % 3
a7 = 3 % 5
a8 = 5 + '3'
a9 = '5' - 3
a10 = 75 + 'кг'
console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9)
console.log(a10)
```
/* №19 */
```JavaScript
height = 23
width = 10
s = height * width
console.log(s) 
```
/* №20 */
```JavaScript
heightC = 10
dC = 4
v = heightC * dC
console.log(v)
```
/* №21 */
```JavaScript
let S=2000000;
let years=5;
let p=0.1;
let perepl=0;
let plata = S/(years*12);
for (let i=1;i<=years*12;i++)
{
perepl+=S*p/12
S-=plata;
}
console.log("Переплата: " + perepl + " рублей");
```
/* №22 */
```JavaScript
let str = 'Привет'
let num = 123
let flag = true
let txt = "true"
console.log('typeof(str) - ', typeof(str))
console.log('typeof(num) - ', typeof(num))
console.log('typeof(flag) - ', typeof(flag))
console.log('typeof(txt) - ', typeof(txt))
```
/* №23 */
```JavaScript
a = 5
console.log(-a)
```

</pre>
<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с JavaScript, лучше стал ориентироваться в нём, кроме того, немного изучил Node js, все поставленные цели были выполнены. </p>


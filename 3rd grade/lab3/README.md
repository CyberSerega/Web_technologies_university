<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №3 "Основы языка JavaScript" </p>

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
```JavaScript
// Задача 1
function task1() {
    alert( null || 2 || undefined );
  }
  
  // Задача 2
  function task2() {
    alert( alert(1) || 2 || alert(3) );
  }
  
  // Задача 3
  function task3() {
    alert( 1 && null && 2 );
  }
  
  // Задача 4
  function task4() {
    alert( alert(1) && alert(2) );
  }
  
  // Задача 5
  function task5() {
    alert( null || 2 && 3 || 4 );
  }
  
  // Задача 6
  function task6() {
    let age = prompt('Введите возраст');
    if ((age>=14) && (age<=90))
    alert(`Переменная age=${age} находится в диапазоне от 14 до 90 включительно`);
  }

  
  // Задача 7
  function task7() {
    let age = prompt('Введите возраст');
    if (!(age>=14 && age<=90))
    alert(`Переменная age=${age} не находится в диапазоне от 14 до 90 включительно`);
    if (age<14 || age>90)
    alert(`Переменная age=${age} не находится в диапазоне от 14 до 90 включительно`);
  }
  
  // Задача 8
  function task8() {
    if (-1 || 0) alert( '-1 || 0 = true' )
        else alert('-1 || 0 = false');
    if (-1 && 0) alert( '-1 && 0 = true' )
        else alert('-1 && 0 = false');
    if (null || -1 && 1) alert( 'null || -1 && 1 = true' )
        else alert('null || -1 && 1 = false');
  }
  
  // Задача 9
  function task9() {
    let role = prompt('Кто там (Админ, другое)');    
    if(role=='Админ')
    {
        let pswd = prompt('Введите пароль (Я Главный)');
        if (pswd=='Я Главный'){
          alert('Здравствуйте!');
        } 
        else if (pswd=='Отмена'){
          alert('Отменено');
        }
        else alert('Неверный пароль');
    }
    else if(role=='Отмена') alert("Отменено");
    else  alert('Я вас не знаю');
  }
  
  // Задача 10
  function task10() {
    console.log("Задача 11");
    let i = 3;
    while (i>=0) {
      alert( i-- );
  }
  }
  
  // Задача 11
  function task11() {
       let i = 0;
      while (++i < 5) alert( i );
      i = 0;
      while (i++ < 5) alert( i );

}
  // Задача 12
  function task12() {
    console.log("Задача 12");
    for (let i = 0; i < 5; i++) alert( i );
    for (let i = 0; i < 5; ++i) alert( i );
  }
  
  // Задача 13
  function task13() {
    console.log("Задача 13");
    for (let i = 2; i <= 10; i+=2) alert( i );
  }
  
  // Задача 14
  function task14() {
    console.log("Задача 14");
    let i=0;
    while(i<3)
    {
      alert( `number ${i}!` );
      i++;
    }
  }
  
  // Задача 15
  function task15() {
    console.log("Задача 15"); 
    let num=0;    
    do
    {
      num = prompt('Введите число >100');
    }
    while(num<=100 | num==null);
  }
  

  function isEasy(num){
    let i=2;
    while(i*i<=num)
    {
      if (num%i==0) return false;
      i++;
    }
    return true;
  }
  // Задача 16
  function task16() {
    console.log("Задача 16");
    let n=10;
    let i=2;
    while(i<=n)
    {
      if (isEasy(i)) alert(i);
      i++;
    }
  }
  
  // Задача 17
  function task17() {
    console.log("Задача 17");
    let browser = 'Operda';
    if (browser == 'Opera') alert("You've got the Edge!" );
    else if (browser == 'Chrome' | browser == 'Firefox' |browser == 'Safari' | browser == 'Opera')
    alert( 'Okay we support these browsers too' );
    else alert( 'We hope that this page looks ok!' );
  }
  
  // Задача 18
  function task18() {
    const number = +prompt('Введите число между 0 и 3', '');

    switch(number){
      case 0: 
        alert('Вы ввели число 0');
        break;
      case 1: 
      alert('Вы ввели число 1');
      break;
      case 2:
      case 3:
        {
          alert('Вы ввели число 2, а может и 3');
          break;
        }   

    }
    }
  
  // Задача 19
  function task19() {
    function checkAge(age) {
      if (age > 18) {
        return true;
      }
      return confirm('Родители разрешили?');
    }
    checkAge(17);    
  }
  
  // Задача 20
  function task20() {
    function checkAge(age) {      
      return age>18 ? true :  confirm('Родители разрешили?'); 
      //  return (age>18 || confirm('Родители разрешили?')); 
    }
    function checkAge1(age) {  
      return (age>18 || confirm('Родители разрешили?')); 
    }
    checkAge(17);   
    checkAge1(17); 
  }
  
  // Задача 21
  function task21() {
    function min(a, b){
      return a<b ? a : b;
    }
    alert('min(2,5) '+ min(2,5));
    alert('min(3,-1) '+ min(3, -1));
    alert('min(1,1) '+ min(1, 1));

  }
  
  // Задача 22
  function task22() {
    function pow(x,n){
      if (n==0) return 1;
      let res = x;
      for(let i=0; i<n-1; i++) res*=x;
      return res;
    }
    let x = prompt('Введите x: ');
    let n = prompt('Введите n: ');
    alert(pow(x,n));
  }

  //telegram bot
  {
  import express from 'express'
import { PORT, TOKEN } from './config.js'
import { Telegraf } from 'telegraf';


const app = express()
const bot = new Telegraf(TOKEN)

bot.start(ctx => {
    ctx.reply('Welcome, bro')
})

bot.on('text', ctx => {
    ctx.reply('just text')
})

bot.launch();

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
}
```
```
</pre>
<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с Node.js, лучше стал ориентироваться в нём, кроме того, поработал с библиотекой Express и Telegraf, создал первого телеграм-бота с помощью Node.js , все поставленные цели были выполнены. </p>


<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №8 "JavaScript" </p>

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
<script>
if (true) alert("true");
if (false) alert ("false");
if (!false) alert ("обратный false");
</script>
/* №2 */
<script>
var m = 51, n;
if (m>50) n = 'большое';
else n = 'маленькое';
alert(n);
</script>
/* №3 */
<script>
var i=2, k=0;
while(i<9)
{
console.log(i++);
k++;
}
alert('Скрипт выполнится '+k+' раз');
</script>
/* №4 */
<script>
var i=45;
alert('смотри консоль');
while(i<68)
{
console.log(i++);
}
</script>
/* №5 */
<script>
var i=50;
alert('смотри консоль');
while(i<=670)
{
console.log(i);
i+=10;
}
</script>
/* №6 */
<script>
alert('смотри консоль');
for(var i = 45; i<=670;)
{
if (i==68) i=70;
console.log(i);
if (i<=67) i++;
else i+=10; 
}
</script>
/* №7 */
<script>
var n=0;
switch (n) {
  case 0:
    alert( 'Ноль' );
	break;
  case 1:
    alert( 'Один' );
	break;
  case 2:
    alert( 'Два' );
	break;
  case 3:
    alert( 'Три' );
    break;
  case 4:
    alert( 'Четыре' );
    break;
  case 5:
    alert( 'Пять' );
    break;
  case 6:
    alert( 'Шесть' );
	break;
  case 7:
    alert( 'Семь' );
	break;
  case 8:
    alert( 'Восемь' );
	break;
  case 9:
    alert( 'Девять' );
	break;
}
</script>
/* №8 */
<script>
for(var i = 0; i<10;i++)
{
document.write('<img src="fav.png">'); 
}
</script>
/* №9 */
<script>
var size1=120, unit="Гб",size = 120;
switch(unit)
{
case 'Гб':
  size*=1024;
case 'Мб':
  size*=1024;
 case 'Кб': 
   size*=1024;
   break;
}
alert('В '+size1+' '+unit+' '+size+' байт');
</script>
/* №10 */
<body>
<p>Апрель</p>
<script>
      let mon = 4; 
	  mon-=1;
      let d = new Date(2023, mon);
	
      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';      
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }      
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) {
          table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
      }      
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }      
      table += '</tr></table>';
	  
     function getDay(date) { 
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }

    document.write(table);
  </script>
</body>

/* №11 */
<script>
function hello1()
{
return 'Привет, JavaScript!';
}
alert(hello1());
</script>
/* №12 */
<script>
function hello2(name)
{
let res = 'Привет, '+ name;
return res;
}
alert(hello2('Сергей'));
</script>
/* №13 */
<script>
function mul(n,m)
{
return n*m;
}
alert(2*5);
</script>
/* №14 */
<script>
function repeat(str,n=2)
{
var res = str;
for (let i=1;i<n;i++)
{
  res+=str;
}
return res;
}
alert(repeat('Привет',4));
</script>
/* №15 */
<script>
function rgb(r=0,g=0,b=0)
{
var res = 'rgb('+r+','+g+','+b+')';
return res;
}
alert(rgb(23,41,43));
</script>
/* №16 */
<script>
function avg()
{
if (arguments.length==0) return 0;
var res=0;
for(let i=0;i<arguments.length;i++){ res+=arguments[i];}
res/=arguments.length;
return res;
}
alert(avg(1,2,3));
</script>
/* №17 */
<script>
function mul(n,m)
{
return n*m;
}
function m(a,b)
{
return mul(a,b);
}
alert(m(2,4));
</script>
/* №18 */
<script>
function operation(m,n,o)
{
switch(o)
{
case '+':
  return m+n; 
case '-':
  return m-n; 
 case '*': 
   return m*n; 
 case '/':
   return m/n;
   break;
}
}
var a=10, b=5

alert(operation(a,b,'/'));
</script>
/* №19 */
<script>
function func(n) 
	{
	return function(x) 
			{
				return x + n;
			};
	}
alert(func(2)(3));
</script>
/* №20 */
function words(number=0)
{
  var res =""+number;
  if (number>=5 & number<=20)
  {
  res +=" товаров";
  return res;
  }
  var value = number%10;
  switch(value)
{  
  case 1:
    res +=" товар";
	break;
  case 2:
    res +=" товара";
	break;
  case 3:
    res +=" товара";
    break;
  case 4:
    res +=" товара";
    break;
}
if (value-5>=0)res +=" товаров";
return res;
}
alert(words(99));
</script>

</pre>
<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с JavaScript, лучше стал ориентироваться в нём, все поставленные цели были выполнены. </p>

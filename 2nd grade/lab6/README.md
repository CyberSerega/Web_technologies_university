<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №6 "CSS" </p>

<p align="right">Выполнил: Рогаль Сергей Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">CSS (Cascading Style Sheets) — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. CSS используется для определения стилей (правил) оформления документов — включая дизайн, вёрстку и вариации макета для различных устройств и размеров экрана. 
</p>

<h2 align="center">Цели и задачи</h2>
<palign="justify">Цели: выполнить задания, создать заголовки, абзацы, страницы по образцу, стилизовать страницы</p>
<palign="justify">Задачи: применить технологии HTML и CSS.</p>

<h2>Решение задач</h2>
<pre>
  <style>
  html {
  font-size: 150%;
}
/* №1 */
div p{
	color:red;
}
/* №2 */
div h2
{
	color:green;
}
/* №3 */
#test p{
	color:orange;
}
/* №4 */
#test h2{
	color:blue;
}
/* №5 */
.bbb{
	color:violet;
}
/* №6 */
#test .bbb {
	color:red;
}
/* №7 */
.bbb p{
	text-align:center;
}
/* №8 */
.bbb h2{
	text-align:center;
}
/* №9 */
#test .bbb p {
	color:red;
}
/* №10 */
.bbb, .xxx {
	color:red;
}

/* №11 */
#test .bbb p, #test .xxx h2 {
	color:red;
}
/* №12 */
#test .bbb p, #test .xxx p {
	color:red;
}
/* №13 */
.fff {
	color:red;
}
/* №14 */
.fff>p {
	color:red;
}
/* №15 */
.fff p {
	color:red;
}
/* №16 */
.fff>.bbb {
	color:red;
}
/* №17 */
.fff>.bbb h2 {
	color:red;
}
/* №18 */
#test a:link, #test a:visited {
	color:red;
	text-decoration: none;
}
#test a:hover {
	color:blue;
	text-decoration:underline;
}
/* №19 */
a.www:link, a.www:visited {
	color:blue;
	text-decoration:underline;
}
a.www:hover {
	text-decoration: none;
}
/* №20 */
#test a.www:link {
	color:pink;
	text-decoration: none;
}
#test a.www:hover {
	color:blue;
	text-decoration:underline;
}
#test a.www:visited {
	color:red;
	text-decoration:line-through;
}
/* №21 */
.eee a.www:link {
	color:pink;
	text-decoration: none;
}
.eee a.www:hover {
	color:blue;
	text-decoration:underline;
}
.eee a.www:visited {
	color:red;
	text-decoration:line-through;
}
</style>
</pre>
<p>№22</p>
<pre>
<style>
#one{
	text-decoration: underline;
}
#two{
	text-decoration: line-through;
}
#three{
	text-decoration: overline;
}
</style>
</pre>
<p>№23</p>
<pre>
<style>
div{
	height:300px;
	width:300px;
	border: solid red 2px;
}
</style>
</pre>
<p>№24</p>
<pre>
<style>
div{
	height:300px;
	width:700px;
	border: solid blue 2px;
}
</style>
</pre>
<p>№25</p>
<pre>
<style>
div{
	height:400px;
	width:400px;
	border: solid blue 2px;
	border-radius: 5px 20px 5px 20px; 
}
</style>
</pre>
<p>№26</p>
<pre>
<style>
div{
	height:400px;
	width:400px;
	border: solid red 2px;
	border-radius: 50%;
}
</style>
</pre>
<p>№27</p>
<pre>
<style>

#one {
	color:green;
}
#two {
	color:red;
}
#three {
	color:black;
	text-decoration:none;
}
</style>
</pre>
<p>Kata1</p>
<pre>
<script>
Add(4, -3, -2);
function Add()
{
var sum=0;
 for(let i=0;i<arguments[i];i++)
 {
	sum+=arguments[i]/(i+1);
 }
 alert(Math.round(sum));
}
</script>
</pre>
<p>Kata2</p>
<pre>
<script>
Add(24, 85, 0);
function Add()
{
var sum=0;
var strResult="";
 for(let i=arguments.length-1; i>=0; i--)
 {
	let str =arguments[i].toString(2);
	
	if(str.length<8)
	{
		let len=str.length;
		let temp="";
		while(len<8)
		{
			temp+="0";
			len++;
		}
		temp+=str;
		str=temp;
	}
	strResult+=str;
 }
 var res=parseInt(strResult,2);
 alert(res);
}
</script>
</pre>
<p>Kata3</p>
<pre>
<script>
Func("ABBCCD");
function Func(str)
{
	var symbols=str[0];	
	var res="";
	for(i=1; i<str.length; i++)
	{
		if(symbols.includes(str[i])) continue;
		else symbols+=str[i];
	}	
	for(i=0; i<symbols.length; i++)
	{
		let digit = symbols[i].charCodeAt(0);
		if(digit==0) continue;
		else res+=digit+" ";
	}	
	
	alert(res);
}
</script>
</pre>
<p>Kata4</p>
<pre>
<script>
Initials('code wars');
function Initials(name)
{
var arr=name.split(' ');
var i;
var res="";
 for(i=0; i<arr.length-1; i++)
 {
	res+=arr[i][0].toUpperCase()+'.';
 }
 res+=arr[i][0].toUpperCase();
 for(i=1; i<arr[arr.length-1].length; i++)
 {
	res+=arr[arr.length-1][i];
 }
 
 alert(res);
}
</script>

</pre>

<p>Kata5</p>
<pre>
<script>
titleToNumber('CODEWARS');
function titleToNumber(str)
{
	let res=0;
	
	res+=str[str.length-1].charCodeAt(0)-'A'.charCodeAt(0)+1;
	for(i=0; i<str.length-1; i++)
	{
		res+=(str[i].charCodeAt(0)-'A'.charCodeAt(0)+1)*26;
	}
	
	alert(res);
}
</script>
</pre>
<p>Kata6</p>
<pre>
<script>
maskify("312514235434234161111");
function maskify(str)
{
	var res="";
	if (str.length<=4)
	{
		alert(str);
		return;
	}	
	for(i=0; i<str.length; i++)
	{
		if(str.length-i-1>=4) res+="#"
		else res+=str[i];
	}
	
	alert(res);
}
</script>
</pre>
<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с HTML и CSS при написании страниц, лучше стал ориентироваться в селекторах CSS, все поставленные цели были выполнены. </p>

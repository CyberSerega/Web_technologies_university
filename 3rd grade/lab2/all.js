console.log("Задание 1\n");
let name = "Ilya";
console.log( `hello ${1}` ); 
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );

console.log("\nЗадание 3");
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(`a = ${a} \nb = ${b} \nc = ${c}  \nd = ${d}`);

console.log("\nЗадание 4\n");
a = 2;
let x = 1 + (a *= 2);
console.log(`a = ${a} \nx = ${x}`);

console.log("\nЗадание 5\n");
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

console.log("\nЗадание 7\n");
console.log(Math.PI);

console.log("\nЗадание 10\n");
a = 10;
console.log(`Периметр квадрата со стороной ${a} равен ${4*a}`);

console.log("\nЗадание 11\n");
let r = 5;
console.log(`Диаметр окружности со радиусом ${r} равен ${2*r}`);

console.log("\nЗадание 12\n");
let R = 6350;
let h = 1;
let distance = (R+h)**2 - R**2
console.log(`Расстояние до линии горизонта от точки с высотой ${h} км над Землей равно ${distance} км`);

console.log("\nЗадание 13\n");
a = 2;
console.log(`Объем куда с ребром ${a} равен ${a**3}, площадь боковой поверхности равна ${4*a*a}`);

console.log("\nЗадание 14\n");
r = 5;
console.log(`Длина окружности с радиусом ${r} равна ${2*Math.PI*r}, площадь круга равна ${Math.PI*r*r}`);

console.log("\nЗадание 15\n");
let num1 = 5;
let num2 = 8;
console.log(`До: num1 = ${num1},  num2 = ${num2}`);
num1+=num2;
num2 = num1 - num2;
num1-=num2;
console.log(`После: num1 = ${num1},  num2 = ${num2}`);

console.log("\nЗадание 16\n");
num1 = 7;
num2 = 9;
console.log(`num1 = ${num1},  num2 = ${num2}`);
console.log(`Среднее арифметическое: ${(num1+num2)/2},  среднее геометрическое: ${Math.sqrt(num1*num2)}`);

console.log("\nЗадание 17\n");
let m = 7;
let v = 0.01;
console.log(`Масса вещества: ${m} кг, объем ${v} м3, плотность: ${m/v} кг/м3`);

console.log("\nЗадание 18\n");
let val = 700000;
let S = 10000;
console.log(`Население государства: ${val} чел, плостность ${S} км2, плотность населения: ${val/S} чел/км2`);

console.log("\nЗадание 19\n");
a = 3;
b = 4;
console.log(`Катеты прямоугольного треугольника: ${a} и ${b}, гипотенуза равна ${Math.sqrt(a*a + b*b)}`);

console.log("\nЗадание 20\n");
r = 3;
R = 5;
console.log(`Внешний радиус кольца: ${R}, внутренний ${r}, его площадь равна ${Math.PI*(R*R - r*r)}`);

console.log("\nЗадание 21\n");
a = 3;
b = 4;
c = Math.sqrt(a*a + b*b);
console.log(`Катеты прямоугольного треугольника: ${a} и ${b}, его периметр равен ${a+b+c}`);

console.log("\nЗадание 22\n");
a = 5;
b = 11;
h = 4;
let temp = (b-a)/2;
c = Math.sqrt(h*h + temp*temp);
console.log(`Основания равнобедренной трапеции: ${a} и ${b}, её периметр равен ${a+b+2*c}`);

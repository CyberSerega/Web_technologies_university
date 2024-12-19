const readline = require('readline-sync');

while(true)
{
    let a = readline.question("Type a number (type f to exit): ");
    if (a=='f') break;
    console.log(Number(a), '- вот какое число вы ввели');
}
console.log('Конец');
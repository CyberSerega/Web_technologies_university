const readline = require('readline-sync');

while(true)
{
    let a = readline.question("Type a number (type f to exit): ");
    if (a=='f') break;
    console.log('Вы ввели число: ', Number(a));
}
console.log('Конец');
const express = require('express');
const app = express();

app.use(express.static(__dirname)); 

app.listen(3000, () => {
  console.log(`Сервер запущен на порту 3000`);
});
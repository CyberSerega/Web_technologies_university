const express = require("express");
const app = express();
// создаем парсер для данных application/x-www-form-urlencoded
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
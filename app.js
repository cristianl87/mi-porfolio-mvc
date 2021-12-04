const express = require("express");
const app = express();
const rutasHome = require("./routers/main");
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/", rutasHome);


app.listen(3000, () => {
  console.log("Servidor funcionando");
});

console.log(path.resolve(__dirname, "./public"));
    
   

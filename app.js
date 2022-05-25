const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.static('public'));


const PORT = process.env.PORT || 3000






app.get("/", (req, res) => {
res.sendFile(__dirname + '/view/home.html')

})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/view/login.html');
});


app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/view/registro.html');
});



app.listen(PORT, ()=>{
    console.log('Servidor funcionando');
});
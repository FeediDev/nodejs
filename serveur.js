const express = require("express")
const app = express()
const todos = []


app.get('/api/all',(res,req)=>{
    res.send(todos)
})


app.post('/api/create',(res,req)=>{
    const data = todos.push(req.body)
    console.log("data",data)
    res.send(data);
})
app.get('/',(req,res)=>{
    res.send('hello from my serveur!');//accept all types of responce
    res.json({message: "hello from my server"}); //accept just json file in responce
    res.end({message: "hello from my serveur"}); //accept just this responce
});

app.get ('/file', (req, res)=>{
res.sendFile(__dirname+'/public/index.html');
});



app.listen(5000,()=>{
    console.log(`Serveur démarré sur http://localhost:5000`);
});


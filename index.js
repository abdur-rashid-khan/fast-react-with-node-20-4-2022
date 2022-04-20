const express = require("express");
const cors = require("cors")
const app = express();
const port =process.env.PORT||5000;

app.use(cors())
app.use(express.json())

app.get('/',(req , res)=>{
   res.send('create fast api ')
});
// total users list in array of object 
const users= [
   {"id":"1","name":"rashid khan","number":"0398493498374878"},
   {"id":"2","name":"rabbi khan","number":"0398493498374878"},
   {"id":"3","name":"opu khan","number":"0398493498374878"},
   {"id":"4","name":"summon khan","number":"0398493498374878"},
   {"id":"5","name":"mahamud khan","number":"0398493498374878"},
]
app.get('/user',(req ,res )=>{
   res.send(users)
})


app.get('/user/:id',(req , res)=>{
   const id = parseInt(req.params.id);
   const user = users.find(u=>u.id == id) ;
   res.send(user);
})
app.post('/user',(req , res)=>{
   console.log('request', req.body);
   const user = req.body;
   user.id = users.length + 1;
   users.push(user);
   res.send(user)

   res.send('post method success')
})
app.listen(port,()=>{
   console.log(`Your Port is ${port}`)
})
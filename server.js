const express = require('express')
const app = express()
const notasRutas = require('./routes/notas')
const usersRutas = require('./routes/users')
//procesos intermedios Middleware
app.use(express.text())
app.use(express.json())

app.use("/notas",notasRutas)
app.use("/users",usersRutas)
app.get('/',(req,res)=>{
    
    console.log(`${req.method} ${req.url} ${res.statusCode}`  )
    return res.send("Pagina Principal")
    
})



const PORT=4000
app.listen(PORT,()=>{
    console.log(`Server en Puerto : ${PORT} `)
})

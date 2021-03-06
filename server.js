const express = require('express')
const path = require('path')
const app = express()
const notasRutas = require('./routes/notas')
const usersRutas = require('./routes/users')
//procesos intermedios Middleware
app.use(express.text())
app.use(express.json())


app.use("/notas",notasRutas)
app.use("/users",usersRutas)

app.use(express.static(path.join(__dirname,"static")))


function archivosHtml(doc){
    return path.join(__dirname,"views",doc)
}


app.get('/',(req,res)=>{

    return res.sendFile(archivosHtml("index.html"))
    
})

const PORT=4000
app.listen(PORT,()=>{
    console.log(`Server en Puerto : ${PORT} `)
})

const express = require('express')
const Notas = require('../controllers/notas')
const path = require('path')

const router = express.Router()
const notas = new Notas()

function archivosHtml2(doc){
    return path.join(__dirname,"../","views",doc)
}

router.get('/',async(req,res)=>{
    return res.sendFile(archivosHtml2("notas.html"))
})
router.get('/user/x:id',(req,res)=>{
    return res.sendFile(archivosHtml2("notassigleUser.html"))
})
router.get('/all',async(req,res)=>{
    const notasRes = await notas.getNotas()
    return res.status(200).json(notasRes)
})
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const notasRes = await notas.getNotasUser(id)
    return res.status(200).json(notasRes)
})
router.post('/crear',async(req,res)=>{
    const data = req.body
    // const {id}=req.params
    const notasRes = await notas.insertNotas(data)
    return res.status(200).json(notasRes)
})
router.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params
    const notasRes = await notas.delNotas(id)
    return res.json(notasRes)
})

module.exports=router

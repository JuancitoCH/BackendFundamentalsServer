const express = require('express')
const Notas = require('../controllers/notas')

const router = express.Router()
const notas = new Notas()



router.get('/',async(req,res)=>{
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

module.exports=router

const express = require('express')
const Notas = require('../controllers/notas')

const router = express.Router()
const notas = new Notas()


router.get('/',async(req,res)=>{
    const notasRes = await notas.getNotas()
    return res.status(200).json(notasRes)
})


module.exports=router

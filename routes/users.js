const express = require('express')
const Users = require('../controllers/Users')

const router = express.Router()
const users = new Users()


router.get('/',async(req,res)=>{
    const usersRes = await users.getUsers()
    return res.status(200).json(usersRes)
})
router.post('/register',async(req,res)=>{
    console.log(req.body)
    const usersRes = await users.insertUser(req.body)
    return res.status(200).json(usersRes)
})


module.exports=router

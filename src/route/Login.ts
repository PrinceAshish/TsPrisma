import * as express from "express";
import { PrismaClient  } from '@prisma/client'
const prisma = new PrismaClient()
const router  = express.Router()

router.post('/login', async(req, res) => {
    const {email,password} = req.body
    if(!email){
        return res.json({error: "Please Enter Email"}).status(404)
    }
    if(!password){
        return res.json({error: "Please Enter Password"}).status(404)
    }
    const user = await prisma.user.findUnique({
        where:{
            email: email,
            password: password
        }
    })
    if(!user){
        return res.json({error: "User Not Found"}).status(404)
    }
    res.json(user)
    // res.redirect('/')
})



export default router;
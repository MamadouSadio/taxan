const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

app.use(express.static('out'))
app.get('/auth/login', (req,res)=>{
    res.json({
        message:"Page en construction"
    })
})
app.listen(8000,()=>console.log('daccord'))
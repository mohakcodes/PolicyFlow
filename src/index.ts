import express from 'express'

const app = express()
app.use(express.json())

app.get("/health", (req,res) => {
    res.json({status:"ok", service:"policyflow"})
})

app.listen(3000, ()=>{
    console.log("PolicyFlow Running - 3000")
})
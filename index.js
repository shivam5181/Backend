require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sign',(req, res)=>{
    res.send("Hii,How are you")
})

app.get('/login', (req ,res) => {
    res.send("<h1>Please login at sign up page</h1>")
})

app.get("/utube", (req, res) =>{
    res.send("<h2>Code is fun</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
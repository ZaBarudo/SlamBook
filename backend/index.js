const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT||3001

app.use(cors())
app.use(express.json())

app.post('/api/login', (req, res) => {
    console.log(req.body)
    res.send(req.body)
    
})


app.get('/home', (req, res) => {
    res.send("NODNONONONon")
})


app.listen(PORT,()=>{
    console.log('Listening on port',PORT)
})
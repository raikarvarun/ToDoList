const express = require('express')
const PORT_NO = 3033
const app = express()

app.get('/' , (req , resp )=>{
    resp.send("App is Working");
})

app.listen(PORT_NO);
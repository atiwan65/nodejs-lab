const express = require('express')
const app = express()
const port = 5000

app.get('/',(req,res)=> res.send('D kup'))

//ใช้แอร์โรวืแทนได้ ()=>
app.listen(port,function(){console.log('Server Started on port ${port}!')
})

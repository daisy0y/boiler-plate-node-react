const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lee:abcd1234@react.oi776.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('연결됨'))
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
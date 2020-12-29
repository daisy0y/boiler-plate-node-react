const express = require('express')
const { User } = require('./models/User')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const config = require('./config/key')

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가지고 온다.
app.use(bodyParser.urlencoded({extended:true})) 


// application/json 이렇게 된 데이터를 분석해서 가지고 온다.
app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI,{
  useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('연결됨'))
.catch(err=>console.log(err,'왜에러요'))

app.get('/', (req, res) => {
  res.send('Hello World! Nodemon!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/register',(req,res)=>{
    // 회원 가입 할 때 필요한 정보들을 클라이언트에서 가지고 오면 
    // 그 데이터를 데이터 베이스에 넣어준다.
    
    const user = new User(req.body)
    user.save((err,userInfo)=>{
      if(err) return res.json({success:false, err})
      return res.status(200).json({
        success:true
      })
    } 

)})


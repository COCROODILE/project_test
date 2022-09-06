const { response } = require('express')
const express=require('express')
const app=express()
app.get('/home',(request,response)=>{
    // 相应一个画面
    response.sendFile(__dirname+'/index.html')
})
app.get('/data',(request,response)=>{
    response.send('用户数据')
})
app.listen(9000,()=>{
    console.log('server is running on 9000 port...');
})
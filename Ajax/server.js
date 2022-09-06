const express = require('express')
const { json } = require('express/lib/response')
const app=express()
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('hello ajax get-2')
})
app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('hello ajax post')
})
app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        name:'atguigu'
    }
    let str=JSON.stringify(data)
    response.send(str)
})
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);
})
//jquery服务
app.all('/jquery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        name:'vangie'
    }
    let str=JSON.stringify(data)
    response.send(str)
    
})//如果系统禁止运行脚本可以到系统设置->更新与安全->打开开发人员选项->选择PowerShell的对号点击应用
//axios服务
app.all('/axios-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        name:'vangie'
    }
    let str=JSON.stringify(data)
    response.send(str)
    
})
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        name:'vangie'
    }
    let str=JSON.stringify(data)
    response.send(str)
    
})
app.all('jsonp-server',(request,response)=>{
    // response.send('console.log("jsonp-server hello")')
    const data={
        name:'vangie'
    }
    let str=JSON.stringify(data)
    response.end(`handle(${str})`)
})
// 用户名检测是否存在
app.all('/check-username',(request,response)=>{
    const data={
        exist:1,
        msg:'用户已经存在'
    }
    let str=JSON.stringify(data)
    response.end(`handle(${str})`)
})
app.all('/jquery-jsonp-server',(request,response)=>{
    const data={
        name:'vangie',
        city:['beijing','shanghai','shenzhen']
    }

    let str=JSON.stringify(data)
    let cb=request.query.callback
    response.end(`${cb}(${str})`)
})
app.all('/cors-server',(resquest,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('hello cors')
})
app.listen(8000,()=>{
    console.log('server is running on 8000 port...');
})
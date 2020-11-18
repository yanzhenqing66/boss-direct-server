// 引入 express 框架
const express = require('express')

const db = require('./db')
const serviceRouter = require('./router/serviceRouter')

// 创建app服务对象
let app = express()

db.then(() => {
  // 中间件
  app.use(express.urlencoded({ extended: true }))
  // app.use(express.static('public'))
  app.use(serviceRouter)
  
}).catch(err => {
  console.log(err)
})

// 绑定窗口监听
app.listen(5000, err => {
  if (!err) console.log('服务器连接成功')
  else console.log(err)
})
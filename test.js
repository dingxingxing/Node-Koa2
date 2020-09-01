/*
async function f1() {
  return 'hello'
}
// async 返回一个Promise对象  --异步的终极解决方案

console.log(f1());

const Koa = require('koa') // import from 实验特性，无法直接在node当中使用

// 应用程序对象 中间件
const app = new Koa()

// 发送HTTP KOA 接受HTTP 需要中间件(其实就是函数)

// 函数


// 注册
app.use(async(ctx,next) => {
  // 上下文
  console.log(1);
  await next()
  const r = ctx.r
  console.log(r);
  // const a = await next()
  // 求值关键字 表达式 不仅仅是Promise
  // a.then(res => {
  //   console.log(res);
  // })
  // console.log(a);
  console.log(2);
})

app.use(async(ctx,next) => {
  // console.log(3);
  const axios = require('axios')
  const res = await axios.get("http://www.baidu.com")
  ctx.r = res
  next()
  // console.log(4);
  // return 'hello xiaoyu'
})

// 保证中间件按洋葱模型执行的先决条件是，每一个next前面都有增加一个async
app.listen(3000)
*/




// 机制 监听任何异常

// 函数设计
// 判断异常 return false null
// throw new Error 编程规范

function fun1() {
    fun2()
}
async function fun2() {
    try {
      fun3()
    } catch (error) {
      console.log('error')
    }
}
function fun3() {
  // 异步操作无法捕获到异常，同步可以捕捉
  // 
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const r = Math.random()
      if(r<0.5) {
        reject('error')
      }
    })
  })
}

// 代码大全
fun1()
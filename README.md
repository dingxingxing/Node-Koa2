# Koa

## 框架简述

Koa框架过于精简，需要经过二次开发才能更便于使用。相比较于express框架，因为应用层级不深所有并未感觉有啥太大异同，毕竟自己玩，不是写大型应用项目API接口数据库设计。

这个小demo编写了几个API，有关于实现用户注册登录识别和用户访问鉴权。数据库采用的是MySQL，虽然代码量不多，但是最核心的是其中的编程思想，模块划分解耦，面向切面编程全局异常处理兜底等等

比较巧妙的地方，

1、

```js
InitManger.initCore(app)
```

这个函数实现了路由自动挂载；写入全局配置文件，即用即调（妈妈再也不用担心我不知道数据从哪里导入获取啦）

2、

```js
app.use(catchError)
```

全局异常捕获进行兜底，异常触发的保护防线

3、

各类文件的区分划类，不同文件定义不同js函数实现不同功能，完全耦合开。一个真正实现的js代码全是引入模块，每个模块做着不同的分工，这才是代码应该有的亚子，一段代码从头至下算不得好代码（个人观点）



## Sequelize

使用express玩的时候，使用的是mysql库，结果被人嘲笑用这么原始的东西。当时学习深度不够，现在看来着实有些好笑。在express框架选择mysql库使用连接池本就是无可厚非的选择，因为框架本身并未暴露提供操作数据库的API。有些岔提了，但是无论何时我们都要加强自身的学习，不要被别人说的误导，别人本身不一定就是正确的。

sequelize库相对于mysql库的好处是不需要写sql语句，增删改查都被封装成了对应的方法，创建表的方式也不是通过sql语句而是通过建立模型，由库帮你创建表，将模型转换成相应的sql执行（你不需要写sql，建模就完事了）。

mysql库需要自己通过写sql的方式实现增删改查，有利于学习sql语句。

两者之间包括其他框架提供的操作数据库的方式，并没有一定要有个孰高孰低的较真，根据业务需求，根据个人喜好,便意度-选择最合适的就是最好的。
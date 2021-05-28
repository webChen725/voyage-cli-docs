# 配置文件

Voyage-CLI会在一些命令执行时查询配置文件中的配置参数，当然如果不存在也不影响正常的使用，脚手架会在执行命令是提示输入必要的参数信息.当然，配置文件中可以完成更多的自定义.

Voyage-CLI会读取项目目录下的.voyage-cli.js文件，具体的配置信息可以在该配置文件中使用module.exports进行导出.

## customTemplate系列配置:
```javascript
customTemplate: 用于指定自定义的初始化项目模版
    npmName: 项目模版在npm上的名字.  必须
    version: 需要下载安装的模版的版本. 必须
    extra: 渲染项目时需要传递给ejs渲染的附加参数. 可选
```
> 注: voyage-cli脚手架在init初始化项目之后将会使用ejs模版渲染进行一些自定义信息的处理，如果你需要你的安装更具有个性化，可以尝试在模版中需要渲染的地方使用ejs的模版语法进行编写，此时可以使用customTemplate的extra参数中给出需要渲染的输出值，Voyage-CLI会将extra中的信息合并到项目的基础信息中传递给ejs进行渲染.

## ssh系列配置
```javascript
ssh: 指定和publish发布相关的配置信息
    sourceIp: 需要部署到服务器的公网IP地址, 如果不配置会在指令执行时提示输入
    username: 登录远程服务器的用户名，如果不配置会在指令执行时提示输入，默认为root
    password: 登录远程服务器的密码，如果不配置会在指令执行时提示输入
    os: 远程部署服务器的系统类型，目前支持CentOS和Ubuntu，如果不配置会在指令执行时提示输入，请和服务器真实类型保持一致，否则将无法发布
    buildOutPath: 项目在执行npm run build构建之后输出的目录，默认为/dist目录
    exposePort: 预期部署到服务器监听的接口，默认为3000端口，当端口被占用时，将会自动往后顺延到下一个空闲端口
    serverName: 服务部署的名称，将会作为Nginx.name
    forceClean: 是否在自动部署时情况上次git clone的项目文件，如果不指定，在第一次cloen项目之后，第二次开始将会使用git pull进行代码的同步
    buildCommand: 服务端运行构建项目的命令，默认为npm run build进行项目构建
    nginxPath: 自定义上传到服务器部署的nginx配置文件路径，当不指定时将会使用最简单的基础配置
    dockerFilePath: 自定义部署docker时的DockerFile文件路径，当不指定时将会使用Voyage-CLI的默认文件
```
> Voyage-CLI的服务部署将会使用Nginx + Docker的模式进行项目的构建部署，所以可以通过自定nginx.conf和Dockerfile进行构建的控制
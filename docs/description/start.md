# 开始项目

**开始创建你的第一个Voyage-CLI项目**
> 请确保此时您已经安装完成了voyage-cli工具，你可以通过以下命令进行检测
```bash
voyage-cli --version
```

## 初始化第一个项目:
```bash
# 新建项目目录
1. mkdir -p ~/project/voyage-test
2. cd ~/project/voyage-test
# 使用voyage-cli工具进行项目初始化创建
3. voyage-cli init voyage-test
```
1. 使用Voyage-cli工具可以选择创建普通前端项目或者搭建前端组件库项目，更具项目的不同类型，在进行git发布的时候会有不同的处理逻辑.
2. Voyage-cli中提供了一些默认模版库，用户完全可以根据自己的需要进行模版库的制定，voyage-cli将会为你下载相应的模版并开始构建，但是如果你需要能够在制定的项目模版中自动生成相应的自定义内容，请看Voyage-CLI高级部分--自定义安装模版
3. Voyage-cli工具将会在模版安装成功之后自动开始安装项目依赖(运行npm install)，并且在依赖安装完成后自定启动项目运行

## 将项目发布到Git
```bash
voyage-cli commit
```
1. Voyage-cli目前支持发布到GitHub或者Gitee平台，可更具用户需要进行选择
2. 项目发布到Git并不需要强制依赖Voyage-cli创建的项目，任何一个项目都可以使用commit命令自定提交到Git仓库
3. 初始化执行命令时，Voyage-cli将会进行一系列的初始化信息，所以在调用相应Git方法的过程中，需要用户填写对应Git平台上生成的Git Token信息
4. 从第二次提交开始，之后的commit过程将会在提交前自动pull对应分支代码以及master分支代码，保证在多人协作开发的情况下可以及时解决掉冲突
5. 根据需要，用户可以在每次提交时进行指定此次提交需要更新的版本信息，可分为一个大版本，中版本，小版本.
> * Github平台生成token的链接地址: [GitHub Token生成](https://github.com/settings/tokens)
> * Gitee平台生成token的链接地址: [Gitee Token生成](https://gitee.com/profile/personal_access_tokens)

## 自动化构建部署
```bash
vayage-cli publish
```
1. 项目发布时需要填写一些必要信息，包括远程服务器host, username, password等信息，可以通过在项目中创建.voyage-cli文件进行配置，或者在执行命令时根据提示进行填写. voyage-cli将会尝试去读取 .voyage-cli文件中的配置信息，当不存在某项必要配置时，将会在命令执行阶段提示用户填写
2. voyage-cli进行项目发布构建时，目前仅支持Linux系统平台，包括Centos和Ubuntu系统进行项目构建
3. 项目的发布需要项目已经发布到Git仓库，并且仓库需要是public的状态才能够进行构建，否在在服务器端将无法clone项目。
4. 初始化项目构建时，由于需要进行clone Git仓库中的代码，所以可能需要较长时间的等待，同时也有可能clone失败(国内可以选用Gitee平台，clone速度更快，成功率更高).如果clone项目失败，可以进行多次尝试。初始化构建之后，在之后的构建过程中则会通过git pull去拉取该仓库中的文件，稳定性和速度都将会有提升.
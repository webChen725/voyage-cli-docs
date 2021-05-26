# 介绍

voyage-cli脚手架工具是一款针对前端业务开发诞生的CLI工具，目的在于简单前端开发之外的其他事情: git仓库管理，项目发布云端服务器部署等。这些事情在前端开发中既是繁复的，但又是不可或缺的。Voyage-CLI的目的就是简化这一系列的操作，解放程序员的时间投入到实际的业务需求的开发中去。

**:tada: :tada: Voyage-CLI工具具有以下以下一些优势**
1. 更简便的前端项目管理:
    * Voyage-CLI的初始目的即是为了简化前端Git控制的繁琐，通过一键命令提交，即可完成从创建项目到Git仓库建立，以及基础的Master分支和dev分支的自定创建。
    * 项目每次提交都将会自定进行相应分支的自定合并，以及针对当前新版本自定创建新的Git分支进行项目管理.
    * 项目提交自动进行版本控制，根据用户配置自定进行大，中，小版本的计算更新.
    * 所有Git操作都收纳到一个统一命令下进行控制，更具参数或配置进行相应的操作，降低使用者的成本.
<img :src="$withBase('/description/git-flow.png')" alt="git流程"> (voyage-cli Git构建流程)

2. 高可扩展的架构设计
    * Voyage-CLI的架构设计秉承可扩展性，给用户更多的可定制空间，除了基础的指令配置之外，Voyage-CLI更类似一个执行的壳子，用户可以自行编写指令执行逻辑，然后交由Voyage-CLI进行执行，或者自定义符合自己开发风格的项目模版，进行定制开发

3. 更高效的脚手架指令执行
    * Voyage-CLI充分利用Node多进程进行指令执行流程，提高脚手架执行的效率

4. 更方便的项目发布上线
    * Voyage-CLI通过SSH连接远程服务器进行前端项目的自动化构建，并且可以通过相关配置对服务进行一系列配置，包括服务监听端口，Nginx配置等等.
    * 自动化构建还可以针对指定的Git分支拉取不同分支的项目进行打包构建，利用Docker容器构建前端服务
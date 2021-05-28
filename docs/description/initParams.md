# Init命令参数

voyage-cli init 命令用于快速创建一个前端开发的基础项目模版,基本使用如下:
```bash
voyage-cli init
```
* init指令仅有一个专有参数提供使用: -f || --force
::: tip 参数描述
--force参数是在当前目录不为空的情况下，是否强制情况当前目录。 (判断是否为空会忽略掉 "." 开头的文件以及 node_modules 文件夹)
:::
```bash
voyage-cli init --force
```
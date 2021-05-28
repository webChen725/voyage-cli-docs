# Commit命令参数

voyage-cli commit 命令用于快速提交项目到Git仓库:
```bash
voyage-cli commit
```
* commit参数1: --refreshToken
::: tip 参数描述
--refreshToken: 是否在此次commit提交项目是强制更新Git Token信息, Token信息的获取在前文中已给出.
:::
```bash
voyage-cli commit --refreshToken
```
* commit参数2: --refreshOwner
::: tip 参数描述
--refreshOwner: 是否在此次commit提交项目是强制更新Git Owner信息
:::
```bash
voyage-cli commit --refreshOwner
```
* commit参数3: --refreshServer
::: tip 参数描述
--refreshServer: 是否在此次commit提交项目是强制更新Git服务信息，常在需要切换Git源的时候使用，目前仅支持GitHub和Gitee源
:::
```bash
voyage-cli commit --refreshServer
```
* commit参数4: --force
::: tip 参数描述
--force: force参数相当于refreshToken，refreshOwner，refreshServer参数的组合，会清空所有缓存的git仓库信息进行重新设置，包括项目中的.git文件也会被删除,谨慎使用
:::
```bash
voyage-cli commit --force
```
* commit参数5: --prod
::: tip 参数描述
--prod: 是否进行当前开发分支的发布，设置该参数时会在提交时进行发布版本控制，删除当前的开发分支，将当前分支的代码合并到master分支上，同时发布一个release版本，打上tag标签
:::
```bash
voyage-cli commit --prod
```
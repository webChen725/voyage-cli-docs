module.exports = {
    title: "voyage-cli脚手架",
    description: '可能是你用过最简单的业务脚手架工具',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav:[
            { text: 'home', link: '/' },
            {
              text: 'GitHub',
              items: [
                { text: 'GitHub地址', link: 'https://github.com/OBKoro1' }
              ]
            }        
        ],
        sidebar:{
            '/description/': [
                '/description/',
                {
                  title: '快速开始',
                  children: [
                    '/description/',
                    '/description/install',
                    '/description/start'
                  ]
                }
              ],
              // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
              '/algorithm/': [
                '/algorithm/', 
                {
                  title: '第二组侧边栏下拉框的标题1',
                  children: [
                    '/algorithm/simple/test' 
                  ]
                }
            ]
        }
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': './public'
          }
        }
    }
}
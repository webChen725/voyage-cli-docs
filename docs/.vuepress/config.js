module.exports = {
    title: "voyage-cli脚手架",
    description: '可能是你用过最简单的业务脚手架工具',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
        nav:[
            { text: 'home', link: '/' },
            {
              text: 'GitHub',
              items: [
                { text: 'GitHub地址', link: 'https://github.com/webChen725/voyage-cli' }
              ]
            }        
        ],
        sidebar:{
            '/description/': [
              {
                title: "快速开始",
                collapsable: true,
                children: [
                  '/description/',
                  '/description/install',
                  '/description/start'
                ]
              },
              {
                title: "指令参数",
                collapsable: true,
                children: [
                  '/description/initParams',
                  '/description/commitParams',
                  '/description/publishParams',
                  '/description/baseParams',
                ]
              },
              {
                title: "配置文件",
                collapsable: true,
                children: [
                  '/description/configFile'
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
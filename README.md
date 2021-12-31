# MammutUI 猛犸组件系统

- [文档地址](https://liuwenzhuang.github.io/mammut-ui/)
- [组件导航](https://liuwenzhuang.github.io/mammut-ui/#/examples/main-nav)

## 本地运行

1. 安装依赖 `npm install`
2. 运行开发服务器 `npm start`
3. [组件导航](#/examples/main-nav)

## 项目结构

```bash
    ├── .eslintrc
    ├── README.md
    ├── assets - 静态资源文件
    ├── doc - 示例文件夹
    ├── lib - 生成的打包文件
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── scripts - 脚本文件
    └── src - 源文件
```

## 发布

1. 执行 `npm version [<newversion>]` 名称升级版本

    ```shell script
    npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
    ```

2. 执行 `npm run publish` 发布

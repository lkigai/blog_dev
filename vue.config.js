module.exports = {
    publicPath: './',
    productionSourceMap: false,      //打包时不产生map文件
    devServer: {
        open: true,       //运行项目时自动打开浏览器
        port: 9999       //端口号
    }
}
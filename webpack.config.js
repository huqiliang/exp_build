const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //引入html-webpack-plugin
module.exports = {
  plugins: [
    // 对应的插件
    new HtmlWebpackPlugin({
      //配置
      filename: "index.html", //输出文件名
      template: "./index.html" //以当前目录下的index.html文件为模板生成dist/index.html文件
    }),
    // 热更新，热更新不是刷新
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./dist",
    //配置此静态文件服务器，可以用来预览打包后项目
    inline: true, //打包后加入一个websocket客户端
    hot: true, //热加载
    contentBase: path.resolve(__dirname, "dist"), //开发服务运行时的文件根目录
    compress: true //开发服务器是否启动gzip等压缩
  }
};

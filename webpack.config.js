const path = require('path');

module.exports = {
    entry: './Script/main.js', //项目入口文件
    output:{                    //输出编译后文件地址及文件名
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
        publicPath: './'

    }
};
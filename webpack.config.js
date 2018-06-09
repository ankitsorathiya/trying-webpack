const path =require("path");
const config={
    entry:["./src/index.js"],
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    mode:"development",
    devServer: {
        contentBase: path.join(__dirname, "./"),
        compress: true,
        port: 8080,
        open:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

module.exports=config;
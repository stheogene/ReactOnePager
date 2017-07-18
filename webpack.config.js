var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            // Add paths to components specific to app
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Hero: 'app/components/Hero.jsx',
            Grid: 'app/components/Grid.jsx',
            Footer: 'app/components/Footer.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['','.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.js$/,
                loader: "imports-loader?this=>window"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|otf|ttf|eot)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
            
           
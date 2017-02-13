var webpack = require("webpack");

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!bootstrap/dist/js/bootstrap.min.js",
        "./app/app.jsx"
    ],
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        })
    ],
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            Bootstrap: "node_modules/bootstrap/dist/css/bootstrap.min.css",
            Main: "app/components/Main.jsx",
            Movies: "app/components/Movies.jsx",
            Akcija: "app/components/Akcija.jsx",
            Animirani: "app/components/Animirani.jsx",
            Komedija: "app/components/Komedija.jsx",
            Drama: "app/components/Drama.jsx",
            Nav: "app/components/Nav.jsx",
            movieList: "app/api/movieList.jsx",
            customStyles: "public/style.scss"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                loader: "babel-loader",
                exclude:/node_modules/
            },
            {
                test: /\.css/,
                loader: "style!css"
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)/,
                loader: "url"
            },
            {
                test: /\.scss/,
                loader: "style!css!sass"
            }
        ]
    },
    devtool: "#source-maps"
};
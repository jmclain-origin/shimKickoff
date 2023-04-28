import { Configuration } from 'webpack';
import * as path from 'path';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const webpackConfig = (): Configuration => {
    return {
        entry: {
            path: path.resolve('src/node/typescript/main.ts'),
        },
        output: {
            clean: true,
            filename: 'js/main.js',
            path: path.resolve('dist'),
        },
        resolve: {
          extensions: ['.ts', '.scss'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                    // exclude: /node_modules/,
                }
                ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/style.css'
            }),
            new CopyWebpackPlugin({
                patterns: [
                { from: path.resolve('dist/css'), to: path.resolve('src/main/webapp/public/css') },
                    { from: path.resolve('dist/js'), to: path.resolve('src/main/webapp/public/js') },
                ] })
        ]
     }
}

export default webpackConfig;

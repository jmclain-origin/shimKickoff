import { Configuration } from 'webpack';
import * as path from 'path';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
let __dirname: string;

const webpackConfig = (): Configuration => {
    return {
        entry: {
            path: path.resolve(__dirname, './src/main/node/typescript/main.ts'),
        },
        output: {
            path: path.resolve(__dirname, './dist/main/node/typescript/dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader','sass-loader'],
                    exclude: /node_modules/,
                }
                ]
        },
        plugins: [
            new CopyWebpackPlugin({ })
        ]
     }
}

export default webpackConfig;

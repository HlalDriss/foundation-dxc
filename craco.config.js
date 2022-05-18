/* eslint-disable @typescript-eslint/no-var-requires */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;
const path = require('path');

module.exports = {
    webpack: {
        // optimization: {
        //     runtimeChunk: 'single'
        // },
        configure: {
            entry: './src/index',
            mode: 'development',
            devServer: {
                static: {
                    directory: path.join(__dirname, 'dist')
                },
                port: 3000
            },
            output: {
                publicPath: 'auto',
                chunkFilename: '[id].[contenthash].js'
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js'],
                alias: {
                    events: 'events'
                }
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx|tsx|ts)$/i,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-typescript']
                        }
                    }
                ]
            },
            plugins: [
                new ModuleFederationPlugin({
                    name: 'foundation_dxc',
                    library: { type: "var", name: "foundation_dxc" },
                    filename: 'remoteEntry.js',
                    exposes: {
                        
                        './Link': './src/components/Link/Link',
                        './Grid': './src/components/Grid/Grid',
                       
                    },
                    remotes: {
                         dxc: 'dxc_gt_ui_react_standard@http://localhost:3001/remoteEntry.js'
                    },
                    shared: {
                        react: { singleton: true, eager: true, requiredVersion: deps.react },
                        'react-dom': {
                            singleton: true,
                            // deps["react-dom"]
                            requiredVersion: deps['react-dom']
                        },
                        '@mui/material': {
                            singleton: true,
                            // deps["react-dom"]
                            requiredVersion: deps['@mui/material']
                        },
                        '@mui/styles': {
                            singleton: true,
                            // deps["react-dom"]
                            requiredVersion: deps['@mui/styles']
                        },
                        '@mui/icons-material': {
                            singleton: true,
                            // deps["react-dom"]
                            requiredVersion: deps['@mui/icons-material']
                        },
                        '@material-ui/icons': {
                            singleton: true,
                            // deps["react-dom"]
                            requiredVersion: deps['@material-ui/icons']
                        }
                    }
                }),
                new HtmlWebpackPlugin({
                    template: './public/index.html'
                })
            ]
        }
        // alias: {
        //     react: path.resolve('./node_modules/react'),
        //     'react-dom': path.resolve('./node_modules/react-dom'),
        //     redux: path.resolve('./node_modules/redux'),
        //     'react-redux': path.resolve('./node_modules/react-redux'),
        //     'react-query': path.resolve('./node_modules/react-query'),
        //     '@mui/material': path.resolve('./node_modules/@mui/material')
        // }
    }
};

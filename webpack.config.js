const path = require('path');

const config = {
  // TODO: Add common Configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
  }
};

const btaSdk = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bookthatapp-sdk.min.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'BookThatApp',
  },
});

module.exports = [btaSdk];

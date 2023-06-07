const path = require('path');

const config = {
  // TODO: Add common Configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
};

const btaSdk = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bookthatapp-sdk.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'BookThatApp',
    clean: true,
  },
});

module.exports = [btaSdk];

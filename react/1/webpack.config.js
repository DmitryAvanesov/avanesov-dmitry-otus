const path = require('path');

module.exports = {
  entry: './src/Greeting.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: './dist/index.html'
    }
  },
};
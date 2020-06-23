const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
  app: './src/index.js',
  print: './src/print.js',
  },
  
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader',
        ],
               
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  };

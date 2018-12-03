const path                      = require('path'),
      HtmlWebpackPlugin         = require('html-webpack-plugin'),
      MiniCssExtractPlugin      = require('mini-css-extract-plugin'),
      TerserPlugin              = require('terser-webpack-plugin'),
      OptimizeCssAssetsPlugin   = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/assets/scripts/App.js',
  output: {
    filename: 'assets/scripts/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
}

/* eslint-disable global-require */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./site.config');

// Define common loader constants
const sourceMap = config.env !== 'production';

// Javascript loaders
const js = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    'eslint-loader',
  ],
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('tailwindcss')('./config/tailwind.config.js'),
        require('autoprefixer')(),
      ],
      sourceMap,
    },
  },
};

const css = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoader,
    postcssLoader,
  ],
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoader,
    postcssLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

const less = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoader,
    postcssLoader,
    {
      loader: 'less-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

const media = {
  test: /\.(gif|png|jpe?g|svg|mp4|webm)$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
        outputPath: 'images/',
      },
    },
  ],
};

const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /images/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};

module.exports = [
  js,
  css,
  sass,
  less,
  media,
  fonts,
];

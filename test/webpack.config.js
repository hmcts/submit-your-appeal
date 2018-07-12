import path from 'path';
module.exports = {
/*
  target: 'web',

  context: __dirname,

  entry: 'mocha!./web.js',*/
context: '/',
  entry: [
    path.resolve(__dirname, '.'),
    path.resolve(__dirname, 'assets/scss/main.scss'),
    path.resolve(__dirname, 'assets/js/main.js')
  ],
  resolveLoader: {
    modules: ["node_modules"],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /test/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: [ "env" ] }
          }
        ]
      },
      {
        test: /\.(njk|nunjucks)$/,
        loader: 'nunjucks-loader',
        query: {
          root: path.resolve(__dirname, '/dist/nunjucks')
        }
      }
    ]
  },

/*  resolve: {
    root: [
      __dirname,
      __dirname + '/fixtures/templates',
      __dirname + '/fixtures/custom_modules'
    ]
  },

  resolveLoader: {
    modulesDirectories: ['web_loaders', 'web_modules', 'node_loaders', 'node_modules', '../']
  }*/

};
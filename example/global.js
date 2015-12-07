'use strict';

// Depends
var path = require('path');
var SvgStore = require('../index');

module.exports = function(_path) {

  var sourcePath = path.join(_path, 'example', 'src');
  var buildPath = path.join(_path, 'example', 'build');

  return {
    entry: {
      'app': path.join(sourcePath, '/assets/js/app.js')
    },
    output: {
      filename: '[name].js',
      path: buildPath
    },
    resolve: {
      root: sourcePath
    },
    plugins: [
      new SvgStore(path.join(sourcePath, 'assets', 'img', 'icons', '**/*.svg'), 'assets/img', {
        name: 'svg-sprite.svg',
        chunk: 'app'
      })
    ]
  }
};
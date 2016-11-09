module.exports = function(grunt, options) {
  'use strict';

  return {
    build: {
      options: {
        pretty: true,
        data: function(dest, src) {
          return grunt.file.readJSON('package.json');
        },
      },
      files: {
        'www/index.html': 'src/views/index.pug',
        'www/status-code.html': 'src/views/status-code.pug',
      },
    },
  };
};

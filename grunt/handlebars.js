// Precompile Handlebars templates
module.exports = {
  options: {
    namespace: 'HonHttpStatus.Templates',
  },

  build: {
    files: {
      'www/templates/all.js': ['src/templates/**/*.hbs'],
    },
  },
};

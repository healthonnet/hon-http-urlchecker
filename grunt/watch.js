// Run predefined tasks whenever watched files are changed
module.exports = {
  build: {
    files: [
      'src/**/*',
    ],
    tasks: ['build'],
  },
  options: {
    livereload: true,
  },
};

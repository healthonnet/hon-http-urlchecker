// Run predefined tasks whenever watched files are changed
module.exports = {
  build: {
    files: [
      'src/**',
    ],
    tasks: ['test'],
  },
  options: {
    livereload: true,
  },
};

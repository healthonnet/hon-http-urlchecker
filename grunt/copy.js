// Copy files
module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['**'],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/bootstrap/dist/',
      src: [ 'css/bootstrap.min.css' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/jquery/dist/',
      src: [ 'jquery.min.js' ],
      dest: 'www/js/',
      nonull: true,
    },],
  },
};

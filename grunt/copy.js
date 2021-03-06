// Copy files
module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'css/**'],
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
      cwd: 'bower_components/bootstrap/dist/',
      src: [ 'fonts/**' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/bootstrap/dist/',
      src: [ 'js/bootstrap.min.js' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/jquery/dist/',
      src: [ 'jquery.min.js' ],
      dest: 'www/js/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/handlebars/',
      src: [ 'handlebars.runtime.min.js' ],
      dest: 'www/js/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/responsive-sticky-footer-plugin/dist/',
      src: [ 'jquery.responsiveStickyFooter.min.js' ],
      dest: 'www/js/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/hon-bootstrap-template/dist/',
      src: [ 'js/hon-bootstrap-template.min.js' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/hon-bootstrap-template/dist/',
      src: [ 'css/hon-bootstrap-template.min.css' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/hon-bootstrap-template/dist/',
      src: [ 'images/**' ],
      dest: 'www/',
      nonull: true,
    },],
  },
};

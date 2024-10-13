module.exports = function(grunt) {
    grunt.initConfig({
      sass: {
        options: {
          implementation: require('sass'),
        },
        dist: {
          files: [{
            expand: true,
            cwd: 'src/components',
            src: ['**/*.scss'],
            dest: 'dist/css',
            ext: '.css'
          }]
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-sass');
  
    grunt.registerTask('default', ['sass']);
  };
  
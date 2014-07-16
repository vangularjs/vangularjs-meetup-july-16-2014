module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          port: 8000,
          base: '.',
          keepalive: true,
          open: true
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect:dev']);
};

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      RunApp: {
        command: 'node_modules\\electron-prebuilt\\dist\\electron.exe ./'
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('test', ['shell']);

  // This eventually will build the app/exe
  grunt.registerTask('default', ['shell']);

};

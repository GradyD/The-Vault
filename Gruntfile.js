module.exports = function(grunt) {
  grunt.file.setBase(path.resolve());
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
      appDirectory: path.resolve(),
      outputDirectory: 'tmp/build/installer',
      authors: 'My App Inc.',
      exe: 'myapp.exe'
    }
  });

  grunt.loadNpmTasks('grunt-electron-installer');

  grunt.registerTask('default', ['create-windows-installer']);

};

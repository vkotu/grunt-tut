module.exports = function(grunt) {
/*
  grunt.registerTask('speak', function() {
    console.log("i am speaking");
  });

  grunt.registerTask('yell', function() {
    console.log("i am yelling");
  });

  grunt.registerTask('both', ['speak', 'yell'])
*/
grunt.initConfig({
  concat: {
    js: {
      src: ['js/1.js', 'js/2.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
      src: ['css/main.css', 'css/theme.css'],
      dest: 'build/css/styles.css'
    }
  },

  watch: {
    js: {
      files: ['js/**/*.js'],
      tasks: ['concat:js'],
    },
    css: {
      files: ['css/**/*.css'],
      tasks: ['concat:css'],
    },
  }
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('default', ['concat', 'watch']);

}

module.exports = function (grunt){

  //project config
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
            'css/main.css': 'sass/main.sass'
      }
    }
  },

browserSync: {
    bsFiles: {
      src: ['css/*.css', 'index.html']
    },
    options: {
      watchTask: true,
      server: {
        baseDir: './'
      }
    }
  },

 watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
}
});

  //load the plugin tasks
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-watch');

  //default task
grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};

/*jshint esversion: 6 */

module.exports = function (grunt) {

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

        jshint: {
            all: ['js/*.js'],
            options: {
                'esversion': 6
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

    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['sass', 'browserSync', 'jshint', 'watch']);

};

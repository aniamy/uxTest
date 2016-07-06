module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss',
                    'css/tabs.css': 'scss/tabs.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'css/style.css': 'css/style.css',
                    'css/tabs.css': 'css/tabs.css'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/vendor.min.css': 'css/*.css'
                }
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            script: {
                files: 'scripts/*.js',
                tasks: ['uglify']
            },
            html: {
                files: 'src/*.html',
                tasks: ['minifyHtml']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/vendor.min.js': ['scripts/chico.min.js', 'scripts/script.js']
                }
            }
        },
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['sass', 'autoprefixer', 'cssmin', 'uglify', 'minifyHtml']);
}
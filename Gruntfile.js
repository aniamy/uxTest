module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'css/style.css' : 'scss/style.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'css/style.css':'css/style.css'
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
		  'output/vendor.min.css': 'css/style.css'
		}
	  }
	},
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    },
	uglify: {
      my_target: {
        files: {
          'output/vendor.min.js': 'scripts/script.js'
        }
      }
    },
	htmlmin : {
        dist : {
            options : {
                removeComments : true,
                collapseWhitespace : true
            },
            files : {
                'output/index.html' : 'html/index.html'
            }
        }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default',['watch', 'uglify', 'htmlmin']);
}
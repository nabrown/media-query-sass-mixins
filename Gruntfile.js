module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CONFIG ===================================/
		watch: {
			sass: {
				files: ['css/sass/*.{scss,sass}'],
				tasks: ['sass:dev','sass:dist','autoprefixer']
			}
		},
		sass: {

			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/media-queries-dev.css': 'css/sass/media-queries.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/media-queries.css': 'css/sass/media-queries.scss'
				}
			}
		},
		autoprefixer: {
			no_dest_multiple: {
				src: ['css/*.css']
			},
			options: {
  				browsers: ['last 1 version', 'ie 10', 'ie 9', 'ie 8']
			}
		}
	});

	// DEPENDENT PLUGINS =========================/


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	

	// SET UP DEFAULT TASK =====================================/

	grunt.registerTask('default', ['sass:dev','sass:dist','autoprefixer','watch']);

};

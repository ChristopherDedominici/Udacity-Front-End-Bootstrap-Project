module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: [
					'css/*'
				],
				dest: 'min/combined.css'
			},
			js: {
				src: [
					'js/*'
				],
				dest: 'min/combined.js'
			}
		},
		cssmin: {
			css: {
				src: 'min/combined.css',
				dest: 'min/combined.min.css'
			}
		},
		//not used in this example because no js file is used 
		uglify: {
			js: {
				files: {
					'min/combined.min.js': ['min/combined.js']
				}
			}
		},

		watch: {
			files: ['css/*', 'js/*'],
			tasks: ['concat', 'cssmin', 'uglify']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};
'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {
			options: {
				'node': true,
				'strict': true,
				'undef': true,
				'unused': 'vars',
				'noempty': true,
				'latedef': true,
				'freeze': true,
				'forin': true,
				'curly': true,
				'eqeqeq': true,
				'bitwise': true,
				'sub': true
			},
			all: ['Gruntfile.js', 'lib/**/*.js', 'api/**/*.js', '!lib/php-unserialize.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);

};
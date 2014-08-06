module.exports = {
	'module' : [
		'bower',
		'jshint:all', 
		'concat:module',
		'uglify:module',
		'cssmin:module',
		'copy:module'
	],

	'module:run' : [
		'module',
		'connect:module',
		'watch:module'
	]
};
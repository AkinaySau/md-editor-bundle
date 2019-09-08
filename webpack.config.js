var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
	.setOutputPath('./src/Resources/public/')
	// public path used by the web server to access the output path
	.setPublicPath('/')

	.addEntry('md-editor', './assets/md-editor.js')

	.enableSingleRuntimeChunk()

	//https://symfony.com/doc/current/frontend.html#adding-more-features
	.cleanupOutputBeforeBuild()
	.enableBuildNotifications()
	.enableSourceMaps(!Encore.isProduction())
	// enables hashed filenames (e.g. app.abc123.css)
	.enableVersioning(Encore.isProduction())

	// enables Sass/SCSS support
	.enableSassLoader()
	.enablePostCssLoader()
	.enableVueLoader()
;

module.exports = Encore.getWebpackConfig();

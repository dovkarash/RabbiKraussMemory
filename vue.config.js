module.exports = {
	pluginOptions: {
		prerenderSpa: {
			registry: undefined,
			renderRoutes: [
				'/',
				'/Privacypolicy',
				'/Termsofuse',
				'/Post',
				'/personal-tributes',
				'/publications',
				'/articles',
				'/levaya',
				'/shiurim-video',
				'/shiurimarticles',
			],
			useRenderEvent: true,
			onlyProduction: true,

			headless: true,
			customRendererConfig:
			{
				args: ['--auto-open-devtools-for-tabs']
			}
		}
	}
}

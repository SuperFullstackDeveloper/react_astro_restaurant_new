module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [require('tw-elements/dist/plugin.cjs')],
};

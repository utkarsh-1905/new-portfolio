// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import ESBuildNodePolyfillsPlugin from 'esbuild-plugin-node-polyfills';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			Plugin: [ESBuildNodePolyfillsPlugin]
		})
		// vite: { optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] } }
	}
};

export default config;

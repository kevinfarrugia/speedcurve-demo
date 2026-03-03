import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = { runes: true, kit: { adapter: adapter() } };

export default config;

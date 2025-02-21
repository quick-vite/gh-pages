import { gitHubSpaConfig } from "@quick-vite/gh-pages-spa/config";
import solid from 'vite-plugin-solid'

import packageJson from './package.json' with { type: 'json' }

export default gitHubSpaConfig(packageJson, {
    plugins: [solid()],
	build: {
		target: 'esnext'
	}
})
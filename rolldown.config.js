import { defineConfig } from 'rolldown';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default 
// defineConfig(
	{
	input: "npm.js",
	output: {
		dir: "dist",
		// format: "esm"
	},
	plugins: [
		nodeResolve(), 
		commonjs({include: 'node_modules/**'}),  // Default: undefined}),
	]

}
// )
// import { defineConfig } from 'rolldown';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeGlobals from "rollup-plugin-node-globals"
import nodePolyfills from 'rollup-plugin-node-polyfills';
import builtins from 'rollup-plugin-node-builtins';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import inject from '@rollup/plugin-inject';
import { Arborist } from "@npmcli/arborist";

export default 
// defineConfig(
	{
	input: "npm.js",
	output: {
		dir: "dist",
		format: "esm"
	},
	plugins: [
		// nodeGlobals(),
		json(),
		builtins(),
		nodeResolve(), 
		// // inject({}),
		nodePolyfills({ path: true, http: true }),
		commonjs(
			{ 
				include: 'node_modules/**', 
				// esmExternals: true,
				transformMixedEsModules: true,
				// defaultIsModuleExports: false,
				// requireReturnsDefault: true,
				esmExternals: (id) => {console.log({id})}
			}
		),  // Default: undefined}),
		// replace({
		// 	'Object.defineProperty(exports, "__esModule", { value: true });': '',
		// 	delimiters: ['\n', '\n']
		// }),
		// babel({ babelHelpers: 'bundled' }),
	]

}
// )
import { componentize } from '@bytecodealliance/componentize-js';
import { writeFile } from 'node:fs/promises';

const { component } = await componentize(`
  export function install () {
		console.log("IMWORKING")
  }

`, `
  package jaf:wnpm;
  world installer {
    export install: func();
  }
`);

await writeFile('test.component.wasm', component);
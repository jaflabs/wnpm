// import npm from "npm-registry-fetch"
// import { npm } from "npm"
// import { Npm }  from "npm"
// const {Npm} = require("npm")
// const npm = require("npm")
// const Arborist = require('@npmcli/arborist')
import { Arborist } from "@npmcli/arborist"


// cli("something")

// async function go() {
	let arb = new Arborist({})
	console.log({arb})
	let real = await arb.reify()
	// let final = 
	console.log({real})

// }
import pkg from '../../package.json';

function core(...___: string[]) {
	console.info('>exec core');
	checkPkgVersion();
}

function checkPkgVersion() {
	console.info(pkg.version);
}

export default core;

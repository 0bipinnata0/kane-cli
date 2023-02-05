import pkg from '../../package.json';
import { logger } from '@kane-cli/log';

function core(...___: string[]) {
	console.info('>abc core');
	checkPkgVersion();
}

function checkPkgVersion() {
	console.info(pkg.version);
	logger();
}

export default core;

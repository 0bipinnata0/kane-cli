import importLocal = require('import-local');
import * as npmlog from 'npmlog';
import core from './core';

console.info('__filename', __filename);
if (importLocal(__filename)) {
	npmlog.info('cli', '正在使用 kane-cli 本地版本');
} else {
	core(...process.argv.slice(2));
}

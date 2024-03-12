const genId1 = require('yhbu_xid');
const genId2 = require('tgnw_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|QcYbWVmxRG|' + genId2()).digest('base64');
}


module.exports = generateKey;

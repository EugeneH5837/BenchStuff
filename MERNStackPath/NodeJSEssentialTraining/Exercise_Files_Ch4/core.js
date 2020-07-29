const path = require("path");
const {log} = require("util");
const {getHeapStatistics} = require("v8");

log(getHeapStatistics());

// util.log(path.basename(__filename));

// util.log(" ^ The name of the current file");

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);
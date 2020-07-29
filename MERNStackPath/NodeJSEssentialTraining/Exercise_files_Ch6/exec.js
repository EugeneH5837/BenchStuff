const child_process = require('child_process');

child_process.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
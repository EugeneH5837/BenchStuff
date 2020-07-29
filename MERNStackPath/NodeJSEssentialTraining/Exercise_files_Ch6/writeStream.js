const fs = require('fs');

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// writeStream.write("hello");
// writeStream.write(" world \n");

// readStream.on("data", data => {
//   writeStream.write(data);
// });

readStream.pipe(writeStream);
const fs = require('fs');

fs.readdirSync("./storage").forEach(fileName => {
  fs.unlinkSync(`./storage/${filename}`);
});

fs.renameSync("./storage-files", "./storage");

fs.rmdir("./storage", err => {
  if(err){
    throw error;
  }

  console.log("storage directory removed");
});


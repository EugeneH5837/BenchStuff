const fs = require('fs');

const text = fs.readFile("./assets/alex.jpeg", (err, img) => {

  if(err){
    console.log(`An error has occurred: ${err.message}`);
    process.exit();
  }

  console.log(img);
});


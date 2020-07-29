const cp = require('child_process');

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Beans \n");
questionApp.stdin.write("Eat beans \n");

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
})

questionApp.on("close", () => {
  console.log("question app process exited");
})
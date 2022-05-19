const http = require('http');
const pid = process.pid;
const p1 = process.cwd();
const p2 = process.arch;
const p3 = process.chdir('../node');
console.log(p3);
console.log(p2);
console.log(p1 +"hello world");
http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});
const fs = require('fs');

const data = fs.readFileSync('file.txt');
console.log("" + data);

fs.writeFile('file.txt', "Hello World !", 'utf-8', (err) => {
  console.log("File modified");
})

const dataToAppend = "class is going on";
fs.appendFile('file.txt', dataToAppend, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
    console.log("" + data);
    console.log('Data appended to file successfully!');
  });
fs.appendFileSync('file.txt', "class is going on");

fs.mkdir('dir1', (err) => {
  if(err){
    console.log(err);
  }
  console.log('dir formed');
})

fs.rmdir('dir1', { recursive: true }, (err) => {
  if (err) {
      console.error(`Error deleting directory: ${err}`);
  } else {
      console.log('Directory deleted successfully.');
  }
});

fs.rename('file.txt', 'f1.txt', (err) => {
  if (err) {
      console.log(err);
  }
  console.log('File has been renamed');
});
const p = 'C:/Users/pooja/NodeClass/Class/file.txt';
const path = require("path");

const dirname = path.dirname(p);
const extension = path.extname(p);

console.log(dirname);
console.log(extension);

// get the path of the folder
// get the path of the file

// copy the file from a source to dst
const fs = require('fs');
const path = require('path');
const sourcePath = 'C:/Users/pooja/NodeClass/Class/file.txt';
const destDir = 'C:/Users/pooja/NodeClass/dir1';
const destination = 'C:/Users/pooja/NodeClass/dir1/f1.txt';
const basename = path.basename(sourcePath);
const dest = path.join(destDir, basename);
// fs.copyFileSync(sourcePath, destination);
fs.unlinkSync('f1.txt'); // for cut

const http = require('http');
const server = http.createServer ((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <head> <title>node js class </title> </head><body>');
    if(req.url === '/'){
        res.write('<h1>Hello, World!</h1>');
    }
    if(req.url === '/login'){
        res.write('<h1>Hello, login!</h1>');
    }
    res.write('</body></html>');
    res.end();
})

// when the url contains /login then it should print Hello login
const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});``




import * as fs from 'fs';

const readStream = fs.createReadStream('./data/numbers.txt');

const writeFile = (chunks, curFile) => {
  let chunksString = '';

  chunks.forEach(chunk => {
    chunksString += chunk.toString();
  });

  const array = chunksString.split('\n').map(x => parseInt(x));
  array.sort((a, b) => a - b);

  const writeStream = fs.createWriteStream(`./data/separated-files/numbers${curFile}.txt`);
  writeStream.write(array.join('\n'));
};

const start = async () => {
  let curFile = 0;
  let chunks = [];
  
  let directory = './data/separated-files/'

  // clearing separate-files directory
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(`${directory}/${file}`, err => {
        if (err) throw err;
      });
    }
  });

  for await (const chunk of readStream) {
    chunks.push(chunk);

    // writing data into file if the number at the end of the current buffer isn't cut
    if (chunk.toString().slice(-1) === '\n') {
      writeFile(chunks, curFile++);
      chunks = [];
    }
  }

  if (chunks.length > 0) {
    writeFile(chunks, curFile);
  }
};

start();
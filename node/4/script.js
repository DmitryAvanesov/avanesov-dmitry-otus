import * as fs from 'fs';

const readStream = fs.createReadStream('./data/numbers.txt');

const print = async () => {
  let curFile = 0;
  let chunks = [];

  for await (const chunk of readStream) {
    chunks.push(chunk);

    // writing data into file if the number at the end of the current buffer isn't cut
    if (chunk.toString().slice(-1) === '\n') {
      const writeStream = fs.createWriteStream(`./data/separated-files/numbers${curFile++}.txt`);

      chunks.forEach(elem => {
        writeStream.write(elem);
      });

      chunks = [];
    }
  }
};

print();
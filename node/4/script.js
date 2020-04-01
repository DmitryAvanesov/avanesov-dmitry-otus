const fs = require('fs');
const LineByLineReader = require('line-by-line');
const separatedFilesDirectory = './data/separated-files'

const writeFile = (chunks, curFile) => {
  let chunksString = '';

  chunks.forEach(chunk => {
    chunksString += chunk.toString();
  });

  const array = chunksString.split('\n').map(x => parseInt(x));
  array.pop();
  array.sort((a, b) => a - b);

  const writeStream = fs.createWriteStream(`./data/separated-files/numbers${curFile}.txt`);
  writeStream.write(array.join('\n'));
};

const start = async () => {
  let curFile = 0;
  let chunks = [];

  // clearing separate-files directory
  fs.readdir(separatedFilesDirectory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(`${separatedFilesDirectory}/${file}`, err => {
        if (err) throw err;
      });
    }
  });

  const readStream = fs.createReadStream('./data/numbers.txt');
  const minDataSize = 6;

  for await (const chunk of readStream) {
    chunks.push(chunk);

    // writing data into file if the number at the end of the current buffer isn't cut
    // and the data is big enough
    if (chunk.toString().slice(-1) === '\n' && chunks.length >= minDataSize) {
      writeFile(chunks, curFile++);
      chunks = [];
    }
  }

  if (chunks.length > 0) {
    writeFile(chunks, curFile);
  }

  fs.readdir(separatedFilesDirectory, (err, files) => {
    sortAllNumbers(files.length);
  });
};

const sortAllNumbers = numberOfSeparatedFiles => {
  const lineReadersArray = new Array(numberOfSeparatedFiles);
  const curMinNumbers = new Array(numberOfSeparatedFiles);
  let numberOfStreamsEnded = 0;

  for (let curFileIndex = 0; curFileIndex < numberOfSeparatedFiles; curFileIndex++) {
    const readStream = fs.createReadStream(`${separatedFilesDirectory}/numbers${curFileIndex}.txt`);
    let writeStream = fs.createWriteStream('./data/result.txt');
    
    writeStream.write('');
    writeStream = fs.createWriteStream('./data/result.txt', { flags: 'a' });

    const lineReader = new LineByLineReader(readStream);
    lineReadersArray[curFileIndex] = lineReader;

    lineReader.on('line', line => {
      lineReader.pause();
      curMinNumbers[curFileIndex] = parseInt(line);

      if (curMinNumbers.filter(x => typeof (x) === 'number').length === numberOfSeparatedFiles) {
        writeNextMin(lineReadersArray, curMinNumbers, writeStream);
      }
    });

    lineReader.on('end', () => {
      curMinNumbers[curFileIndex] = 1000000;
      numberOfStreamsEnded++;

      if (numberOfStreamsEnded < numberOfSeparatedFiles) {
        writeNextMin(lineReadersArray, curMinNumbers, writeStream);
      }
    });
  }
};

const writeNextMin = (lineReadersArray, curMinNumbers, writeStream) => {
  const minIndex = curMinNumbers.indexOf(Math.min(...curMinNumbers));
  writeStream.write(`${curMinNumbers[minIndex].toString()}\n`);
  lineReadersArray[minIndex].resume();
}

start();
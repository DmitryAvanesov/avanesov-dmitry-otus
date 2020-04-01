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

const createSeparatedSortedFiles = async () => {
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
  const minDataSize = 5;

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

const sortAllNumbers = async numberOfSeparatedFiles => {
  const lineReadersArray = [];
  let nums = [];

  for (let i = 0; i < numberOfSeparatedFiles; i++) {
    const readStream = fs.createReadStream(`${separatedFilesDirectory}/numbers${i}.txt`);
    const lineReader = new LineByLineReader(readStream);

    lineReader.on('line', line => {
      lineReader.pause();
      nums.push(line);
    });

    lineReader.on('end', () => {
      // All lines are read, file is closed now.
    });

    lineReadersArray.push(lineReader);
  }

  setTimeout(() => console.log(nums), 2000);

  // readStreamArray.forEach(async curStream => {
  //   const readlineInterface = readline.createInterface({
  //     input: curStream
  //   });

  //   for await (const line of readlineInterface) {
  //     nums.push(parseInt(line));
  //     curStream.pause();
  //   }

  //   console.log(nums);
  // });
};

createSeparatedSortedFiles();
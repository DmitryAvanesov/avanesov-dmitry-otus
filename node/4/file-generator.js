const fs = require('fs');

const fileName = 'numbers.txt';
const targetFileSizeInBytes = 104857600;
const randomMax = 1000000;

const fileSizeInBytes = file => {
  const stats = fs.statSync(file);
  return stats['size'];
};

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

// clearing numbers.txt file
fs.writeFileSync(fileName, '');

while (fileSizeInBytes(fileName) < targetFileSizeInBytes) {
  fs.appendFileSync(fileName, `${getRandomInt(randomMax)}\n`);
}
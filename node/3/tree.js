import * as fs from 'fs';

const root = process.argv[2];

const handlePath = path => {
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      console.log(file);
      const innerPath = `${path}/${file}`;

      if (fs.lstatSync(innerPath).isDirectory()) {
        handlePath(`${path}/${file}`);
      }
    });
  });
}

handlePath(root);
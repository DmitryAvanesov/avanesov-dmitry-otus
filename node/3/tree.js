import * as fs from 'fs';

const pathToObject = (path, tree) => {
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      const innerPath = `${path}/${file}`;

      if (fs.lstatSync(innerPath).isDirectory()) {
        tree.dirs.push(innerPath);
        tree = pathToObject(innerPath, tree);
      }

      if (fs.lstatSync(innerPath).isFile()) {
        tree.files.push(innerPath);
      }
    });
  });

  return tree;
}

const root = process.argv[2];
const tree = pathToObject(root, { files: [], dirs: [] });

setTimeout(() => console.log(tree), 1000);
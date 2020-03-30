import * as fs from 'fs';

var tree = {
  files: [],
  dirs: []
};

const getTreeFromPath = async path => {
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      const innerPath = `${path}/${file}`;

      if (fs.lstatSync(innerPath).isDirectory()) {
        tree.dirs.push(innerPath);
        getTreeFromPath(innerPath, tree);
      }

      if (fs.lstatSync(innerPath).isFile()) {
        tree.files.push(innerPath);
      }
    });
  });
}

const root = process.argv[2];
getTreeFromPath(root);

setTimeout(() => console.log(tree), 1000);
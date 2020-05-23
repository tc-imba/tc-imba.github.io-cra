const fs = require('fs');
const path = require('path');
const walk = require('walk');
const yaml = require('yaml');
const capitalCase = require('capital-case').capitalCase;

const paths = require('./paths');

const options = {
  listeners: {
    names: function (root, nodeNamesArray) {
      nodeNamesArray.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
    },
    directories: function (root, dirStatsArray, next) {
      // dirStatsArray is an array of `stat` objects with the additional attributes
      // * type
      // * error
      // * name

      next();
    },
    file: function (root, fileStats, next) {
      if (fileStats.type === 'file') {
        const dir = path.relative(paths.postsSrc, root);
        parseFile(dir, fileStats.name);
      }
      next();
    },
    errors: function (root, nodeStatsArray, next) {
      next();
    },
  },
};

const parseDateTitle = function (dir, filename) {
  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);
  const str = path
    .join(dir, basename)
    .toString()
    .replace(/\//g, '-')
    .replace(/\\/g, '-');
  const data = str.split('-');
  if (data.length < 4) {
    return [null, null];
  }
  const date = data.slice(0, 3).join('-');
  const title = data.slice(3).join('-');
  return [date, title];
};

let posts = [];

const parseFile = function (dir, filename) {
  // console.log(dir, filename);
  const filepath = path.join(dir, filename);
  const ext = path.extname(filename);
  if (ext === '.md') {
    const [date, name] = parseDateTitle(dir, filename);
    if (date && name) {
      let title = capitalCase(name.replace(/-/g, ' '));
      let abstract = '';
      let type = 'post';
      try {
        const file = fs.readFileSync(
          path.join(paths.postsSrc, filepath),
          'utf-8',
        );
        const matched = file.match(/^---([^-]+)---/);
        if (matched) {
          const meta = yaml.parse(matched[1]);
          if (meta.hasOwnProperty('title')) {
            title = meta.title;
          }
          if (meta.hasOwnProperty('abstract')) {
            abstract = meta.abstract;
          }
          if (meta.hasOwnProperty('type')) {
            type = meta.type;
          }
        }
      } catch (e) {}

      posts.push({
        date: date,
        name: name,
        title: title,
        abstract: abstract,
        type: type,
        path: filepath.replace(/\\/g, '/'),
      });
      // console.log(date, title);
    } else {
      console.error('Error parsing:', filepath);
    }
  }
};

walk.walkSync(paths.postsSrc, options);
console.log(posts);

module.exports = posts;

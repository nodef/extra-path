const $ = require('path');



function filename(path) {
  return $.basename(path, $.extname(path));
}
$.filename = filename;
module.exports = $;

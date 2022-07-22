Useful additions to inbuilt [path] module.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-path),
🌐 [Web](https://www.npmjs.com/package/extra-path.web),
📜 [Files](https://unpkg.com/extra-path/),
📰 [Docs](https://nodef.github.io/extra-path/).

This package is available in both *Node.js* and *Web* formats. The web format
is exposed as `extra_path` standalone variable and can be loaded from
[jsDelivr CDN].

[path]: https://nodejs.org/api/path.html
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-path.web/index.js

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>

```javascript
const path = require('extra-path');

function main() {
  path.filename('/home/user/file+name.txt');
  // → file+name

  path.symbolname('/home/user/file+name.txt');
  // → file_name

  path.keywordname('/home/user/file+name.txt');
  // → file-name
}
main();
```

<br>
<br>


## Index

| Property      | Description                      |
| ------------- | -------------------------------- |
| [filename]    | Get file name without extension. |
| [symbolname]  | Get symbol name for file.        |
| [keywordname] | Get keyword name for file.       |

<br>
<br>


[![](https://img.youtube.com/vi/8oXhShuIjrQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=8oXhShuIjrQ)


[filename]: https://nodef.github.io/extra-path/modules.html#filename
[symbolname]: https://nodef.github.io/extra-path/modules.html#symbolname
[keywordname]: https://nodef.github.io/extra-path/modules.html#keywordname

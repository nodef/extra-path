Useful additions to inbuilt [@std/path] module.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-path),
📦 [NPM](https://www.npmjs.com/package/extra-path),
📰 [Docs](https://jsr.io/@nodef/extra-path/doc).

[@std/path]: https://deno.land/std/path/mod.ts

<br>

```javascript
import * as xpath from "jsr:@nodef/extra-path";

xpath.filename('/home/user/file+name.txt');
// → 'file+name'

xpath.symbolname('/home/user/file+name.txt');
// → 'file_name'

xpath.keywordname('/home/user/file+name.txt');
// → 'file-name'
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [filename] | Get file name without extension. |
| [symbolname] | Get symbol name for file. |
| [keywordname] | Get keyword name for file. |

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-path)

[filename]: https://jsr.io/@nodef/extra-boolean/doc/~/filename
[symbolname]: https://jsr.io/@nodef/extra-boolean/doc/~/symbolname
[keywordname]: https://jsr.io/@nodef/extra-boolean/doc/~/keywordname

document.head shim for CommonJS
===============================

This takes [Mathias Bynens's document.head polyfill](https://mathiasbynens.be/notes/document-head) and puts it in CommonJS.

```js
var head = require('document.head');
head.appendChild(/* ... */);
```

You can also use this to add `document.head` support:

```js
document.head = require('document.head');
```

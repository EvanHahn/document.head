document.head shim for CommonJS
===============================

This takes [Mathias Bynens's document.head polyfill](https://mathiasbynens.be/notes/document-head) and puts it in CommonJS.

Install it with npm:

```sh
npm install document.head
```

And then use it with Browserify or Webpack:

```js
var head = require('document.head');
head.appendChild(/* ... */);
```

You can also use this to add `document.head` support, but note that some browsers (like Safari) throw an error when trying to reassign `document.head` when in strict mode.

```js
document.head = require('document.head');
```

Enjoy!

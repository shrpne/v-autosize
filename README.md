# v-autosize

[![NPM Package](https://img.shields.io/npm/v/v-autosize.svg?style=flat-square)](https://www.npmjs.org/package/v-autosize)
[![Minified Size](https://img.shields.io/bundlephobia/min/v-autosize.svg?style=flat-square)](https://bundlephobia.com/result?p=v-autosize)
[![Build Status](https://img.shields.io/travis/com/shrpne/v-autosize/master.svg?style=flat-square)](https://travis-ci.com/shrpne/v-autosize)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/shrpne/pretty-num/blob/master/LICENSE)

Lightweight Vue wrapper for `autosize`.
Use `v-autosize` directive on the `textarea` element to make it automatically adjust height to fit text.



## Install

```
npm install v-autosize
```


## Usage

Register directive locally in the component
```js
import autosize from 'v-autosize';

// Your component
export default {
    directives: {
        autosize,
    }
}
```

Or register directive globally in the root Vue instance
```js
import Vue from 'vue';
import autosize from 'v-autosize/dist/plugin';

Vue.use(autosize);
```

Use `v-autosize` directive on the `textarea` element
```html
<textarea v-autosize></textarea>
```


## License

MIT License

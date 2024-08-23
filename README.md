# v-autosize

[![NPM Package](https://img.shields.io/npm/v/v-autosize.svg?style=flat-square)](https://www.npmjs.org/package/v-autosize)
[![Minified Size](https://img.shields.io/bundlephobia/min/v-autosize.svg?style=flat-square)](https://bundlephobia.com/result?p=v-autosize)
[![Build Status](https://img.shields.io/travis/com/shrpne/v-autosize/master.svg?style=flat-square)](https://travis-ci.com/shrpne/v-autosize)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/shrpne/v-autosize/blob/master/LICENSE)

Lightweight Vue 3 wrapper for [autosize](https://github.com/jackmoore/autosize).
Use `v-autosize` directive on the `textarea` element to make it automatically adjust height to fit text.

### Using Vue 2?
Check old version [v-autosize@1](https://github.com/shrpne/v-autosize/tree/v1?tab=readme-ov-file)


## Install

```
npm install v-autosize
```


## Register

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
import { createApp } from 'vue'
import autosizePlugin from 'v-autosize/src/plugin.js';

const app = createApp({})
app.use(autosizePlugin)
```

## Use

Use `v-autosize` directive on the `textarea` element
```html
<textarea v-autosize></textarea>
```


## Comparison

- This module: [![Minified Size](https://img.shields.io/bundlephobia/min/v-autosize.svg?style=flat-square&label=minified)](https://bundlephobia.com/result?p=v-autosize) [![Minified Size](https://img.shields.io/bundlephobia/minzip/v-autosize.svg?style=flat-square&label=gzipped)](https://bundlephobia.com/result?p=v-autosize)
- [`vue-autosize`](https://github.com/mage3k/vue-autosize): [![Minified Size](https://img.shields.io/bundlephobia/min/vue-autosize.svg?style=flat-square&label=minified)](https://bundlephobia.com/result?p=vue-autosize) [![Minified Size](https://img.shields.io/bundlephobia/minzip/vue-autosize.svg?style=flat-square&label=gzipped)](https://bundlephobia.com/result?p=vue-autosize) Doesn't support Vue 3, `autosize-input` included, not maintained.
- [`vue-textarea-autosize`](https://github.com/devstark-com/vue-textarea-autosize): [![Minified Size](https://img.shields.io/bundlephobia/min/vue-textarea-autosize.svg?style=flat-square&label=minified)](https://bundlephobia.com/result?p=vue-textarea-autosize) [![Minified Size](https://img.shields.io/bundlephobia/minzip/vue-textarea-autosize.svg?style=flat-square&label=gzipped)](https://bundlephobia.com/result?p=vue-textarea-autosize) Doesn't support Vue 3. A component is used instead of a directive.


## License

MIT License

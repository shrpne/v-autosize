import vAutosize from './directive.js';

/**
 * @type {import('vue').Plugin}
 */
const plugin = {
    install: (app, options) => {
        app.directive('autosize', vAutosize);
    },
};

export default plugin;

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    commonjs(),
    resolve(),
    babel({
        babelrc: false,
        presets: [['env', { modules: false }]],
    }),
];

const pluginsUglify = [
    ...plugins,
    terser(), // uglifyjs alternative with es6 support
];

export default [
    {
        input: 'src/directive.js',
        plugins,
        output: {
            file: 'dist/directive.js',
            format: 'umd',
            name: 'autosize',
        }
    },
    {
        input: 'src/plugin.js',
        plugins,
        output: {
            file: 'dist/plugin.js',
            format: 'umd',
            name: 'autosize',
        }
    },
    {
        input: 'src/directive.js',
        plugins: pluginsUglify,
        output: {
            file: 'dist/directive.min.js',
            format: 'umd',
            name: 'autosize',
        }
    },
    {
        input: 'src/plugin.js',
        plugins: pluginsUglify,
        output: {
            file: 'dist/plugin.min.js',
            format: 'umd',
            name: 'autosize',
        }
    }
];

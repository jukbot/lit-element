'use strict';

import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default [{
    // node commonjs
    input: './src/lit-element.ts',
    output: {
        file: './lib/lit-element.js',
        format: 'cjs',
    },
    name: 'lit-element',
    sourcemap: false,
    plugins: [
        resolve(),
        typescript({
            typescript: require('typescript')
        }),
    ]
}, {
    // node module
    input: './src/lit-element.ts',
    output: {
        file: './lib/lit-element.mjs',
        format: 'es',
    },
    name: 'lit-element',
    sourcemap: false,
    plugins: [
        resolve(),
        typescript({
            typescript: require('typescript'),
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true
                }
            }
        }),
    ]
}, {
    // browser
    input: './src/lit-element.ts',
    output: {
        file: './dist/lit-element.js',
        format: 'umd',
    },
    name: 'lit-element',
    sourcemap: true,
    plugins: [
        resolve(),
        typescript({
            typescript: require('typescript'),
            tsconfigOverride: {
                compilerOptions: {
                    module: 'es2015',
                    target: 'es5'
                }
            }
        }),
    ]
}, {
    // browser minified
    input: './src/lit-element.ts',
    output: {
        file: './dist/lit-element.min.js',
        format: 'umd',
    },
    name: 'lit-element',
    sourcemap: true,
    plugins: [
        resolve(),
        typescript({
            typescript: require('typescript'),
            tsconfigOverride: {
                compilerOptions: {
                    module: 'es2015',
                    target: 'es5'
                }
            }
        }),
        uglify({}, minify)
    ]
}]

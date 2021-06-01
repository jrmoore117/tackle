import pkg from './package.json'

import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import url from 'postcss-url';

export default {
   input: 'src/index.js',
   output: [
      {
         file: pkg.main,
         format: 'cjs',
         exports: 'named',
         sourcemap: true,
         strict: false,
         plugins: [terser()],
      }
   ],
   plugins: [
      babel({
         exclude: 'node_modules/**',
         presets: ['@babel/env', '@babel/preset-react']
      }),
      postcss({
         extensions: ['.css'],
         plugins: [
            url({
               url: "inline",
            }),
         ],
      }),
      resolve(),
      commonjs(),
   ],
   external: ['react', 'react-dom']
}

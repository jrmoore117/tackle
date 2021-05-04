import pkg from './package.json'

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-import-css'
import babel from 'rollup-plugin-babel';

export default {
   input: 'src/index.js',
   output: [
      {
         file: pkg.main,
         format: 'cjs',
         exports: 'named',
         sourcemap: true,
         strict: false
      }
   ],
   plugins: [
      babel({
         exclude: 'node_modules/**',
         presets: ['@babel/env', '@babel/preset-react']
      }),
      resolve(),
      commonjs(),
      css()
   ],
   external: ['react', 'react-dom']
}

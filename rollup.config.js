import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './index.js',
  output: {
    format: 'esm',
    file: 'dist/vue-titlebar.js',
    exports: 'named',
  },
  external: ['vue'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: __dirname,
        },
      ],
    }),
    vue({
      css: true,
      target: 'browser',
      include: /\.vue$/,
      template: {
        isProduction: true,
      },
    }),
    resolve({
      extensions: ['.js', '.vue'],
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.vue'],
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
    terser(),
  ],
};

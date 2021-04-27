import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './index.js',
  output: {
    format: 'esm',
    file: 'dist/vue-titlebar.js',
    exports: 'default',
  },
  plugins: [
    vue({
      css: true,
      include: /\.vue$/,
    }),
    resolve(),
    postcss({
      inject: true,
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
    }),
  ],
};

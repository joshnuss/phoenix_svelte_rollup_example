import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoPreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const production = process.env.MIX_ENV == "prod";

export default {
  input: 'js/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: '../priv/static/js/app.js'
  },
  plugins: [
    // Preprocesses CSS with postcss
    // for more info, see: https://www.npmjs.com/package/rollup-plugin-postcss
    postcss(),

    svelte({
      // allows you to preprocessor <style> or <script> tags inside .svelte files
      // for more info, see: https://www.npmjs.com/package/svelte-preprocess
      preprocess: autoPreprocess(),

      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('../priv/static/css/app.css');
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),

    // If we're building for production (npm run deploy
    // instead of npm run watch), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}

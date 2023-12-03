import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import styles from 'rollup-plugin-styles';
import serve from 'rollup-plugin-serve';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import replace from 'rollup-plugin-replace'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevelopment = process.env.NODE_ENV !== 'production';
export default {
  input: path.resolve(__dirname, 'src/index.js'),
  output: [
    {
      file: 'dist/bundle.esm.min.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      // If you would like DEV messages, specify 'development'
      // Otherwise use 'production'
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        '@babel/plugin-transform-runtime'
      ],
      exclude: 'node_modules/**',
    }),
    nodeResolve(),
    commonjs(),
    styles(),
    isDevelopment &&
    serve({
      open: true, // Open the served app in the default browser
      contentBase: __dirname, // Serve files from the 'dist' directory
      port: 3000, // Specify the port
    }),
  ],
};

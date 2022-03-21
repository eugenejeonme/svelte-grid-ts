import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svelte from 'rollup-plugin-svelte';

const packageJson = require('./package.json');

const globals = {
  ...packageJson.devDependencies
};

const name = packageJson.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'umd',
      name,
      globals: { 'svelte-grid': 'svelte-grid' },
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'es', // ES Modules
      globals: { 'svelte-grid': 'svelte-grid' },
      sourcemap: true
    }
  ],
  plugins: [
    svelte(),
    peerDepsExternal({
      includeDependencies: true
    }),
    resolve({
      browser: true
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      module: 'esnext'
    }),
    commonjs({
      extensions: ['.mjs', '.js'],
      exclude: [/node_modules/, /svelte-grid/],
      requireReturnsDefault: 'auto'
    }),
    nodePolyfills()
  ],
  external: Object.keys(globals)
};

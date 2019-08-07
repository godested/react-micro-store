import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import config from './tsconfig.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const name = 'ReactMicroStore';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.browser,
      format: 'iife',
      name,
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    babel({ extensions, include: config.include }),
    terser(),
  ],
};

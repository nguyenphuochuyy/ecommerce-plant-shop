import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import alias from '@rollup/plugin-alias';
import { replace } from 'react-router-dom';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  input: 'src/main.jsx', // Điểm vào của ứng dụng (điều chỉnh nếu cần)
  output: {
    dir: 'dist', // Thư mục đầu ra
    format: 'esm', // Định dạng module (hoặc 'cjs' nếu cần)
    sourcemap: true, // Tạo sourcemap để debug
  },
  plugins: [
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp'],
      limit: 0, 
    }),
    replace({
      values: {
        '"use client";': '', 
        "'use client';": '', 
      },
      preventAssignment: true,
    }),
    resolve({
      extensions: ['.js', '.jsx'], // Hỗ trợ .js và .jsx
    }),
    commonjs(), // Hỗ trợ CommonJS modules
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'], // Xử lý JSX và ES modules
      extensions: ['.js', '.jsx'],
    }),
    postcss({
      extract: true, // Tách CSS ra file riêng
      minimize: true, // Nén CSS
    }),
    terser(), 
       alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ]
    }),
    
    
  ],
  external: ['react', 'react-dom'], // Không bundle React/ReactDOM
};
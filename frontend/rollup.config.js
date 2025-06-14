import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { replace } from 'react-router-dom';

export default {
  input: 'src/main.jsx', // Điểm vào của ứng dụng (điều chỉnh nếu cần)
  output: {
    dir: 'dist', // Thư mục đầu ra
    format: 'esm', // Định dạng module (hoặc 'cjs' nếu cần)
    sourcemap: true, // Tạo sourcemap để debug
  },
  plugins: [
  
    replace({
      values: {
        '"use client";': '', // Remove "use client" directive
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
    terser(), // Nén JavaScript
    
  ],
  external: ['react', 'react-dom'], // Không bundle React/ReactDOM
};
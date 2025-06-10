import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist', 'node_modules', '.vercel'], // Bỏ qua các thư mục không cần lint
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // Thống nhất sử dụng 'latest'
      sourceType: 'module',
      globals: {
        ...globals.browser, // Hỗ trợ môi trường browser
        ...globals.node, // Hỗ trợ môi trường Node.js (cho Vercel)
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect', // Tự động phát hiện phiên bản React
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]|props|_', // Bỏ qua biến in hoa, props, và _
          argsIgnorePattern: '^_', // Bỏ qua tham số bắt đầu bằng _
        },
      ],
      'react/prop-types': 'off', // Tắt prop-types nếu bạn không dùng hoặc dùng TypeScript
      'react/jsx-uses-react': 'off', // Không cần import React từ React 17+
      'react/react-in-jsx-scope': 'off', // Không cần import React từ React 17+
    },
  },
];
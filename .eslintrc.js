module.exports = {
  env: {
    commonjs: true
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 13
  },
  overrides: [
    {
      files: ['src/**/*'],
      env: {
        browser: true,
        es2021: true
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: 'tsconfig.json'
      },
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
          }
        ],
        'import/prefer-default-export': 'off',
        semi: 'error',
        quotes: [2, 'single', { avoidEscape: true }],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
      }
    },
    {
      files: ['server/**/*'],
      env: {
        node: true,
        commonjs: true,
        es2021: true
      },
      extends: ['eslint:recommended', 'airbnb-base', 'airbnb-typescript/base', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 13,
        project: 'server/tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      rules: {}
    },
    {
      files: ['webpack.*.ts'],
      env: {
        node: true,
        commonjs: true,
        es2021: true
      },
      extends: ['eslint:recommended', 'airbnb-base', 'airbnb-typescript/base', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 13,
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      rules: {}
    }
  ]
};

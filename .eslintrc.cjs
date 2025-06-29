module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ], // Désactive la règle qui impose React dans scope (inutile avec React 17+)
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.jsx'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['\\.svg$'],
          },
        ],
      },
    },
  ],
  settings: {
    // Permet d'utiliser les imports .svg
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.svg'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};

// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   sourceType: 'module'
  // },
  ignorePatterns: [
    '.eslintrc.cjs',
    'babel.config.js',
    'rollup.conf.js',
    'demo/**',
    'dist/**',
  ],
  env: {
    browser: true,
  },
  extends: 'eslint-config-airbnb-base',
  rules: {
    'indent': ['error', 4, { 'SwitchCase': 1 }],
    // disable length limit
    'max-len': 0,
    // allow assigning to function parameter
    'no-param-reassign':0,
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'no-use-before-define': 0,
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    // allow let
    'prefer-const': 'off',
    'prefer-destructuring': ['error', {'object': true, 'array': false}],
    // allow extension in imports
    'import/extensions': 'off',
    'prefer-object-spread': 'off',
  },
  overrides: [
    {
      files: ['examples/*'],
      rules: {
        "import/no-extraneous-dependencies": 0,
        'no-console': 0,
      }
    }
  ]
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  // Fronteras de carpetas (ver "Project Structure" en CLAUDE.md).
  overrides: [
    {
      // El código compartido no depende de ninguna vista.
      files: ['src/components/**', 'src/layout/**', 'src/hooks/**', 'src/constants/**', 'src/data/**', 'src/utils/**', 'src/i18n/**', 'src/assets/**'],
      rules: {
        'no-restricted-imports': ['error', { patterns: [{
          group: ['@/views/**', '**/views/**'],
          message: 'El código compartido no puede importar desde views/. Si lo necesitan varias vistas, muévelo a src/components/.',
        }] }],
      },
    },
    {
      // Una vista importa lo suyo con ruta relativa; nunca otra vista.
      files: ['src/views/**'],
      rules: {
        'no-restricted-imports': ['error', { patterns: [{
          group: ['@/views/**'],
          message: 'Dentro de una vista importa con ruta relativa (./components/...). Si otra vista lo necesita, muévelo a src/components/.',
        }] }],
      },
    },
  ],
}

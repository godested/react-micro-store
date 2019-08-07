module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['> 0.25%'],
        },
      },
    ],
    ['@babel/typescript', { isTSX: true, allExtensions: true }],
    '@babel/preset-react',
  ],
};

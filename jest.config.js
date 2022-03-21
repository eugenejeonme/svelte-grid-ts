module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testRegex: '\\.(test|spec)\\.((js|ts))$',
  setupFilesAfterEnv: ['./__test__/setup.ts'],
  cacheDirectory: './.jest/cache'
};

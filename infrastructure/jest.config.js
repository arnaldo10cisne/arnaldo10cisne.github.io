module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^\\.\\/aws\\/config\\.json$': '<rootDir>/src/__mocks__/aws/config.json',
  },
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
  },
}

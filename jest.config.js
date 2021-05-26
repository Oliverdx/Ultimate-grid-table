module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/src/test/__mocks__/styleMock.js',
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}
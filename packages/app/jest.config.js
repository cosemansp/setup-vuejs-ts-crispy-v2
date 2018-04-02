module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)(spec|test).ts?(x)"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  setupTestFrameworkScriptFile: "<rootDir>/jest.setup.ts",
};

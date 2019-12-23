/* eslint-env node */
module.exports = {
  clearMocks: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^gamejitsu/(.*)": "<rootDir>/lib/$1",
    "^gamejitsu": "<rootDir>/lib"
  }
}

/* eslint-env node */
module.exports = {
  clearMocks: true,
  resolver: 'jest-webpack-resolver',
  setupFiles: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom'
}

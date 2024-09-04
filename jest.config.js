const { TestEnvironment } = require('jest-environment-jsdom')
const nextJest = require('next/jest')
const createJestConfig = nextJest({dir: './'})
const customJestConfig = {
  testPathIgnorePatterns: ['<rooDir>/.next/', '<rooDir>/node_modules/'],
  setupFilesAfterEvn: ['<rooDir>/jst.setup.js'],
  moduleDirectories: ['node_modules', '<rooDir>/src'],
  TestEnvironment: 'jsdom',
}
module.exports = createJestConfig(customJestConfig)
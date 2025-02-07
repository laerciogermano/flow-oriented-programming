export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^#shared/(.*)$': '<rootDir>/src/shared/$1'
  }
};
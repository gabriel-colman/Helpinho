module.exports = { // para que o jest saiba que é um arquivo de configuração
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    collectCoverage: true,
    coverageDirectory: 'coverage',
  };
  
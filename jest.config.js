const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const config = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
  // @testing-library/react を使うためセットアップスクリプト( 後述 )
  setupFilesAfterEnv: ['<rootDir>/config/test/utils/setup.ts'],
  // 除外するフォルダーを指定する
  testPathIgnorePatterns: [
    '<rootDir>/config/test/utils/',
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ],
  // コンパイル対象外のフォルダーを指定
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    // Aliasの設定
    '^@/(.+)': '<rootDir>/src/$1'
  },
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )
        module: {
          type: 'commonjs' // 出力するファイルをcommonjsとする
        },
        jsc: {
          parser: {
            syntax: 'typescript', // ソースコードをtypescriptとしてパースする
            tsx: true // jsx記法を許可する
          },
          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  }
}

module.exports = createJestConfig(config)

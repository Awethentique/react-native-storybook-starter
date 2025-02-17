module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          '~': './src',
        },
      },
      'root-alias',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/react-native',
      },
    ],
  ],
};

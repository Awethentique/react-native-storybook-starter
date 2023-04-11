module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
     {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          '@ant-design/react-native',
          '@react-native-camera-roll/camera-roll', 
          '@react-native-picker/picker',
          '@react-native-community/segmented-control',
          '@react-native-community/slider',
          'react-native-gesture-handler',
        ],
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};

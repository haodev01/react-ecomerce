module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~/components': './src/components',
          '~/assets': './src/assets',
          '~/constants': './src/constants',
          '~/screens': './src/screens',
          '~/routes': './src/routes',
          '~/helpers': './src/helpers',
          '~/api': './src/api',
          '~/store': './src/store',
          '~/hooks': './src/hooks',
          '~/types': './src/types',
          '~/configs': './src/configs',
          '~/lib': './src/lib',
        },
      },
    ],
  ],
};

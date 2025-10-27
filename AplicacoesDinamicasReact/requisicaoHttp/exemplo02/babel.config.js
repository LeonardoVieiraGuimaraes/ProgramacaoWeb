module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['expo'],
    plugins: [
      // O plugin do Reanimated deve ser sempre o último
      'react-native-reanimated/plugin',
    ],
  };
};
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // transformer: {
  //   babelTransformerPath: require.resolve('react-native-css-interop/dist/metro/transformer'),
  // },
}
module.exports = mergeConfig(getDefaultConfig(__dirname), config);


// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);
// module.exports = withNativeWind(config, { input: "./global.css" });


// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// const baseConfig = getDefaultConfig(__dirname);
// const customConfig = {
//   // Your custom metro config (if any)
// };

// // Apply NativeWind config
// const nativeWindConfig = withNativeWind(mergeConfig(baseConfig, customConfig), {
//   input: './global.css', // Make sure this path is correct
// });

// module.exports = nativeWindConfig;

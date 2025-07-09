module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    // must be last
    'react-native-reanimated/plugin',
  ],
};


// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: [
//       'module:@react-native/babel-preset',
//       // [ { jsxImportSource: "nativewind" }],
//       // ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//       "nativewind/babel"
//     ],
//     plugins: ["react-native-reanimated/plugin"],
//   };
// };

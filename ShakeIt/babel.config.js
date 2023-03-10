module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      '@babel/plugin-proposal-export-namespace-from',
      // require('@tailwindcss/forms')
    ],
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./src"],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            reducers: "./src/reducers",
            actions: "./src/actions",
            types: "./src/types",
            services: "./src/services",
            utils: "src/utils",
            // Add more aliases for your project's directories
          },
        },
      ],
    ],
  };
};

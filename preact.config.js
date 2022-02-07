export default (config) => {
  const imgLoaderRule = config.module.rules.find((rule) =>
    rule.test.toString().includes("png")
  );
  delete imgLoaderRule.loader;
  imgLoaderRule.use = [
    "file-loader",
    {
      loader: "image-webpack-loader",
      options: {
        mozjpeg: {
          progressive: true,
        },
        optipng: {
          enabled: false,
        },
      },
    },
  ];

  return config;
};

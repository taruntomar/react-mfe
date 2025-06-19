const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "my-org",
    projectName: "react-mfe",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });
  

  return merge(defaultConfig, {
    externals: [
      {
        react: 'react',
        'react-dom': 'react-dom',
        'react-dom/client': 'react-dom/client'
      }
    ]
  });
};
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = function override(config, env) {
  config.mode = env === "production" ? "production" : "development";
  config.optimization.splitChunks = false;
  config.output.uniqueName = "host_countries_api";

  // Set remote URL based on environment
  const remoteUrl = env === "production"
    ? "rockPaperScissors@https://anushkachauhxn.github.io/fm-rock-paper-scissors-lizard-spock/remoteEntry.js"
    : "rockPaperScissors@http://localhost:3001/fm-rock-paper-scissors-lizard-spock/remoteEntry.js";

  config.plugins = config.plugins.filter(
    (plugin) => plugin.constructor.name !== "ModuleFederationPlugin"
  );

  config.plugins.push(
    new ModuleFederationPlugin({
      name: "hostCountriesApi",
      remotes: {
        rockPaperScissors: remoteUrl
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^16.0.0 || ^17.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^16.0.0 || ^17.0.0",
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "^5.0.0",
        }
      }
    })
  );

  return config;
};
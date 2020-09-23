module.exports = {
  configureWebpack: {
    externals: {
      sequelize: "require('sequelize')",
    },
  },
  pluginOptions: {
    electronBuilder: {
      externals: ["sequelize"],
      nodeIntegration: true,
      builderOptions: {
        extraResources: ["src/data.db"],
      },
    },
  },
};

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],

  core: {
    builder: 'webpack5',
  },

  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]s?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader'
    });

    return config;
  },
};

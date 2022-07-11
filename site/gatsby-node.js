exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.js'),
    context: {
      title: 'A Custom page',
      meta: {
        description: 'A custom page with context.',
      },
    },
  });
};
